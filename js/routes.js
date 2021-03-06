(function() {
"use strict";

var DEFAULT_ROUTE = 'about';

var template = document.querySelector('#t');
var ajax, pages, scaffold;
var cache = {};

template.pages = [
  {name: 'About me', hash: 'about', url: 'views/about.html'},
  {name: 'Projects', hash: 'projects', url: 'views/projects.html'}
];

template.addEventListener('template-bound', function(e) {
  scaffold = document.querySelector('#scaffold');
  ajax = document.querySelector('#ajax');
  pages = document.querySelector('#pages');
  var keys = document.querySelector('#keys');

  // Allow selecting pages by num keypad. Dynamically add
  // [1, template.pages.length] to key mappings.
  var keysToAdd = Array.apply(null, template.pages).map(function(x, i) {
    return i + 1;
  }).reduce(function(x, y) {
    return x + ' ' + y;
  });
  keys.keys += ' ' + keysToAdd;

  this.route = this.route || DEFAULT_ROUTE; // Select initial route.
});

template.menuItemSelected = function(e, detail, sender) {
  if (detail.isSelected) {

    // Need to wait one rAF so <core-ajax> has it's URL set.
    this.async(function() {
      if (!cache[ajax.url]) {
        ajax.go();
      }

      scaffold.closeDrawer();
    });

  }
};

template.ajaxLoad = function(e, detail, sender) {
  e.preventDefault(); // prevent link navigation.
};

template.onResponse = function(e, detail, sender) {
  console.log("response");
  console.log(detail.response.querySelector('html'));
  var content = detail.response.querySelector('html');

  var pages = document.querySelector('#pages');
  this.injectBoundHTML(content.innerHTML,
                       pages.selectedItem.firstElementChild);
};

})();