'use strict';

var container = require('markdown-it-container');

var tabs = (function (md) {
  md.use(container, 'tabs', {
    render: function render(tokens, idx) {
      var token = tokens[idx];

      if (token.nesting === 1) {
        return '<div class="vuepress-tabs"><tabs class="custome-tabs">\n';
      } else {
        return '</tabs></div>\n';
      }
    }
  });
});

function tabAttributes(val) {
  return val
  // sanitize input
  .trim().slice('tab'.length).trim()
  // parse into array
  .split(/ +(?=(?:(?:[^"]*"){2})*[^"]*$)/g)
  // normalize name attribute
  .map(function (attr) {
    if (!attr.includes('=')) {
      if (!attr.startsWith('"')) {
        attr = '"' + attr;
      }

      if (!attr.endsWith('"')) {
        attr = attr + '"';
      }

      return 'name=' + attr;
    }

    return attr;
  })
  // roin into a string
  .join(' ');
}

var container$1 = require('markdown-it-container');

var tab = (function (md) {
  md.use(container$1, 'tab', {
    render: function render(tokens, idx) {
      var token = tokens[idx];
      var attributes = tabAttributes(token.info);

      if (token.nesting === 1) {
        return '<tab ' + attributes + '>\n';
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
