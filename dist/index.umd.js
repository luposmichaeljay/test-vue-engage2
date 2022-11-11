(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["agm-awesome-utils-tutorial"] = {}));
})(this, (function (exports) { 'use strict';

    var Engage = function Engage() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        root: '#engage',
        items: []
      };
      if (!options.root) {
        throw new Error('Root is required.');
      }
      if (!options.items || options.items && !options.items.length) {
        throw new Error('Items is required.');
      }
      var root = document.querySelector(options.root);
      var list = document.createElement('ul');
      options.items.forEach(function (item) {
        var listItem = document.createElement('li');
        listItem.innerText = item;
        list.appendChild(listItem);
      });
      root.append(list);
    };

    exports.Engage = Engage;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
