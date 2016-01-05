'use strict';

var vm = require('vm');

function create () {
  var sandbox = {};
  vm.runInNewContext('stolen=this;', sandbox, 'realm.vm');
  return sandbox.stolen;
}

module.exports = create;
