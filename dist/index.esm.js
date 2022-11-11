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

export { Engage };
