//= require ../lib/_lunr
//= require ../lib/_lunr.stemmer.support
//= require ../lib/_lunr.ru
//= require ../lib/_lunr.multi
//= require ../lib/_jquery
//= require ../lib/_jquery.highlight
//= require ./_docbuild.js
$(function () {
  'use strict';

  let content, searchResults;
  let highlightOpts = { element: 'span', className: 'search-highlight' };
  let searchDelay = 0;
  let timeoutHandle = 0;

  let links = buildDocumentsForSearch();

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
          let elem = document.getElementById(result.ref);
          let elemText = (elem !== undefined) ? $(elem).text() : "другой раздел"
          searchResults.append("<li><a href='#" + result.ref + "'>" + elemText + "</a></li>");
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

