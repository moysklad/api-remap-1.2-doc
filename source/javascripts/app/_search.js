//= require ../lib/_lunr
//= require ../lib/_lunr.stemmer.support
//= require ../lib/_lunr.ru
//= require ../lib/_lunr.multi
//= require ../lib/_jquery
//= require ../lib/_jquery.highlight
;(function () {
  'use strict';

  var content, searchResults;
  var highlightOpts = { element: 'span', className: 'search-highlight' };
  var searchDelay = 0;
  var timeoutHandle = 0;
  var index;

  function populate() {
    index = lunr(function(){

      this.ref('id');
      this.field('title', { boost: 10 });
      this.field('body');
      this.pipeline.add(lunr.trimmer, lunr.stopWordFilter);
      var lunrConfig = this;

      $('h1, h2').each(function() {
        var title = $(this);
        var body = title.nextUntil('h1, h2');
        lunrConfig.add({
          id: title.prop('id'),
          title: title.text(),
          body: body.text()
        });
      });

    });
    determineSearchDelay();
  }

  $(populate);
  $(bind);

  function determineSearchDelay() {
    if (index.tokenSet.toArray().length>5000) {
      searchDelay = 300;
    }
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
      }, searchDelay);
    });
  }

  function doSearch(searchString) {
    var indexKeys = [searchString];
    var invertedIndex = index.invertedIndex;
    invertedIndex.each(function() {
      var indexKey = $(this);
      if (indexKey.startsWith(searchString)) {
        indexKeys.push(indexKey);
      }
    });
    var headerIds = new Set();
    var resultSearch = [];
    indexKeys.each(function() {
      var indexKey = $(this);
      var values = index.search(indexKey.replace(/[:~]/g, function(match) {return '\\' + match;} ))
        .filter(function(r) {
          return r.score > 0.0001;
        });
      values.each(function() {
        var value = $(this);
        var id = value.ref;
        if (headerIds.has(id)) {
          var elementArray = resultSearch.filter(function(el) {return el.ref === id;});
          if (elementArray.length !== 0) {
            elementArray[0].score = Math.max(elementArray[0].score, value.score);
          }
        } else {
          headerIds.add(id);
          resultSearch.push(value);
        }
      });
    });
    return resultSearch.sort(function(a , b) {return b.score - a.score});
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
        searchResults.html('<li></li>');
        $('.search-results li').text('Ничего не найдено по запросу "' + searchInput.value + '"');
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
})();
