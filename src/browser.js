'use strict';

var doc = global.document;

function create () {
  var iframe = doc.createElement('iframe');
  iframe.style.display = 'none';
  doc.body.appendChild(iframe);
  return iframe.contentWindow;
}

module.exports = create;
