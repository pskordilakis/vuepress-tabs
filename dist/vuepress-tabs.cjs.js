'use strict';

var container = require('markdown-it-container');

var tabs = (function (md) {
  md.use(container, 'tabs', {
    render: function render(tokens, idx) {
      // return `<span>tabs goes here</span>`
      var token = tokens[idx];

      if (token.nesting === 1) {
        return '<div class="vuepress-tabs"><tabs class="custome-tabs">\n';
      } else {
        return '</tabs></div>\n';
      }
    }
  });
});

var container$1 = require('markdown-it-container');

var tab = (function (md) {
  md.use(container$1, 'tab', {
    render: function render(tokens, idx) {
      var token = tokens[idx];
      var info = token.info.trim().slice('tab'.length).trim();

      if (token.nesting === 1) {
        return '<tab name="' + info + '">\n';
      } else {
        return '</tab>\n';
      }
    }
  });
});

var index = (function (md) {
  // register tabs container
  tabs(md);

  //register tab container
  tab(md);
});

module.exports = index;
