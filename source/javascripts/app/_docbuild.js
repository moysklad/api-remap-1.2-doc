let buildDocumentsForSearch = function () {
  let headerSelector = 'h1, h2, h3';
  return $(headerSelector).map(function () {
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
}

if (typeof module !== 'undefined') {
  module.exports.buildDocumentsForSearch = buildDocumentsForSearch;
}
