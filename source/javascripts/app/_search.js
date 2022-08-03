//= require ../lib/_lunr
//= require ../lib/_lunr.stemmer.support
//= require ../lib/_lunr.ru
//= require ../lib/_lunr.multi
//= require ../lib/_jquery
//= require ../lib/_jquery.highlight
$(function () {
  'use strict';

  let content, searchResults;
  let highlightOpts = { element: 'span', className: 'search-highlight' };
  let searchDelay = 0;
  let timeoutHandle = 0;

  let buildLocalIndexForSearch = function () {
    let headerSelector = 'h1, h2';
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

  let index, hasIndexLoadingError = false;
  if (document.globalSearchIndex !== undefined) {
    try {
      index = lunr.Index.load(document.globalSearchIndex);
    } catch (err) {
      console.error(err); // will use index for page
      hasIndexLoadingError = true;
    }
  }
  if (index === undefined) {
    index = buildLocalIndexForSearch();
  }

  $(determineSearchDelay);
  $(bind);

  function determineSearchDelay() {
      searchDelay = 300;
  }

  function bind() {
    content = $('.content');
    searchResults = $('.search-results');

    $('#input-search').on('keyup',function(e) {
      let wait = function() {
        return function(executingFunction, waitTime){
          clearTimeout(timeoutHandle);
          timeoutHandle = setTimeout(executingFunction, waitTime);
        };
      }();
      wait(function(){
        search(e);
      }, searchDelay );
    });
  }

  function search(event) {

    let searchInput = $('#input-search')[0];

    unhighlight();
    searchResults.addClass('visible');

    // ESC clears the field
    if (event.keyCode === 27) searchInput.value = '';

    if (searchInput.value) {
      let results = index.search(searchInput.value).filter(function(r) {
        return r.score > 0.0001;
      });

      searchResults.empty();
      if (hasIndexLoadingError) {
        searchResults.append("<li class='warning'>Обновите страницу для поиска по всем разделам</li>");
      }
      if (results.length) {
        $.each(results, function (index, result) {
          let urlAndText = result.ref.split("|");
          if (urlAndText.length === 3) {
            if (document.pathToRoot !== undefined) {
              urlAndText[1] = document.pathToRoot + "/" + urlAndText[1];
            }
            searchResults.append("<li><a href='" + urlAndText[1] + "#" + urlAndText[2] + "'>" + urlAndText[0] + "</a></li>");
          } else {
            let elem = document.getElementById(result.ref);
            searchResults.append("<li><a href='#" + result.ref + "'>" + $(elem).text() + "</a></li>");
          }
        });
        highlight.call(searchInput);
      } else {
        searchResults.append('<li>Ничего не найдено по запросу "' + searchInput.value + '"</li>');
      }
    } else {
      unhighlight();
      searchResults.removeClass('visible');
    }
  }

  function highlight() {
    if (this.value) content.highlight(this.value, highlightOpts);
  }

  function unhighlight() {
    content.unhighlight(highlightOpts);
  }
});

