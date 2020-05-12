export let initialize = function(_class, blockName) {
    $(() => {
      $(`.${blockName}`).each((index, node) => {
        new _class(node, blockName);
      });
    });
  }