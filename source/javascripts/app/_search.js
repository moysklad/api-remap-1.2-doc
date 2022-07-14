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

  let headerSelector = 'h1, h2, h3';
  let links = $(headerSelector).map(function() {
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
        if(cleanedText !== "")
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

  let index = lunr(function () {
    this.use(lunr.multiLanguage('ru', 'en'));
    this.ref('id');
    this.tokenizer.separator = /\W/;
    this.field('title', { boost: 10 });
    this.field('body');

    links.forEach(function(link) {
      this.add(link);
    }, this);
  });

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

  function search(event) {

    var searchInput = $('#input-search')[0];

    unhighlight();
    searchResults.addClass('visible');

    // ESC clears the field
    if (event.keyCode === 27) searchInput.value = '';

    if (searchInput.value) {
      var results = index.search(searchInput.value).filter(function(r) {
        return r.score > 0.0001;
      });

      if (results.length) {
        searchResults.empty();
        $.each(results, function (index, result) {
          var elem = document.getElementById(result.ref);
          searchResults.append("<li><a href='#" + result.ref + "'>" + $(elem).text() + "</a></li>");
        });
        highlight.call(searchInput);
      } else {
        searchResults.html('<li></li>');
        $('.search-results li').text('No Results Found for "' + searchInput.value + '"');
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

