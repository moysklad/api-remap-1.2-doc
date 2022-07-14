let buildIndexForSearch = function () {
  let headerSelector = 'h1, h2, h3';
  let links = $(headerSelector).map(function () {
    let title = $(this);
    let body = title.nextUntil(headerSelector, ':not(.highlight):not(button)');
    let bodyTexts = body.toArray().flatMap(function (node) {
      let result = [];
      let currentTextNode;
      let itr = document.createNodeIterator(node, NodeFilter.SHOW_TEXT)
      while ((currentTextNode = itr.nextNode())) {
        let cleanedText = currentTextNode.nodeValue
          .replaceAll('https://online.moysklad.ru/api/remap/1.2/', ' ')
          .replaceAll(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/ig, ' ')
          .replaceAll(/\s+/ig, ' ')
          .trim();
        if (cleanedText !== "")
          result.push(cleanedText);
      }
      return result;
    }).join(" ");

    return {
      "id": title.prop('id'),
      "title": title.text(),
      "body": bodyTexts
    };
  }).toArray();

  window.dispatchEvent(new CustomEvent('searchDocsGenerated',
    {
      detail: {
        documents: links
      }
    }
  ));

  return lunr(function () {
    this.use(lunr.multiLanguage('ru', 'en'));
    this.ref('id');
    this.tokenizer.separator = /\s/;
    this.field('title', {boost: 10});
    this.field('body');

    links.forEach(function (link) {
      this.add(link);
    }, this);
  });
}
