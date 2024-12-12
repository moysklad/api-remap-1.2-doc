//= require ../lib/_lunr
//= require ../lib/_lunr.stemmer.support
//= require ../lib/_lunr.ru
//= require ../lib/_lunr.multi
//= require ../lib/_jquery
//= require ../lib/_jquery.highlight
$(function () {
  'use strict';

  var content, searchResults;
  var highlightOpts = { element: 'span', className: 'search-highlight' };
  var searchDelay = 0;
  var timeoutHandle = 0;

  var buildLocalIndexForSearch = function () {
    var headerSelector = 'h1, h2';
    var links = $(headerSelector).map(function () {
      var title = $(this);
      var body = title.nextUntil(headerSelector, ':not(.highlight):not(button)');
      var bodyTexts = body.toArray().flatMap(function (node) {
        var result = [];
        var currentTextNode;
        var itr = document.createNodeIterator(node, NodeFilter.SHOW_TEXT)
        while ((currentTextNode = itr.nextNode())) {
          var cleanedText = currentTextNode.nodeValue
            .replaceAll('https://api.moysklad.ru/api/remap/1.2/', ' ')
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

  var index, hasIndexLoadingError = false;
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
      var wait = function() {
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

  function doSearch(searchString) {
    var indexKeys = [searchString];
    //TODO: Добавить оптимизации: прикрутить алгоритм быстрого поиска + если последовательно выбрали нужные ключи и больше нет совпадений дальше, то можно выходить из цикла
    var invertedIndex = index.invertedIndex;
    $.each(invertedIndex, function(indexKey, indexValue) {
      if (indexKey.startsWith(searchString)) {
        indexKeys.push(indexKey);
      }
    });
    var headerIds = new Set();
    var results = [];

    $.each(indexKeys, function(indexKey, indexValue) {
      var values = index.search(indexValue.replace(/[:~]/g, function(match) {return '\\' + match;}))
        .filter(function(r) {return r.score > 0.0001;});

      $.each(values, function(key, value) {
        var id = value.ref;
        if (headerIds.has(id)) {
          var elementArray = results.filter(function(el) {return el.ref === id;});
          if (elementArray.length !== 0) {
            elementArray[0].score = Math.max(elementArray[0].score, value.score);
          }
        } else {
          headerIds.add(id);
          results.push(value);
        }
      });
    });
    return results.sort(function(a , b) {return b.score - a.score;});
  }

  function search(event) {

    var searchInput = $('#input-search')[0];

    unhighlight();
    searchResults.addClass('visible');

    // ESC clears the field
    if (event.keyCode === 27) searchInput.value = '';

    if (searchInput.value) {
      var results = doSearch(searchInput.value.toLowerCase());
      searchResults.empty();
      if (hasIndexLoadingError) {
        searchResults.append("<li class='warning'>Обновите страницу для поиска по всем разделам</li>");
      }
      if (results.length) {
        $.each(results, function (index, result) {
          var urlAndText = result.ref.split("|");
          if (urlAndText.length === 3) {
            if (document.pathToRoot !== undefined) {
              urlAndText[1] = document.pathToRoot + "/" + urlAndText[1];
            }
            searchResults.append("<li><a href='" + urlAndText[1] + "#" + urlAndText[2] + "'>" + urlAndText[0] + "</a></li>");
          } else {
            var elem = document.getElementById(result.ref);
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
