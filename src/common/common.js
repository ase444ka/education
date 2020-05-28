export let initialize = function(_class, blockName) {
    $(() => {
      $(`.${blockName}`).each((index, node) => {
        new _class(node, blockName);
      });
    });
  }

  export let fitInWindow = function() {
    let clientHeight = document.documentElement.clientHeight;
    let bottom = this.applyButton.getBoundingClientRect().bottom;
    let left = this.block.getBoundingClientRect().left;
    let width = this.block.getBoundingClientRect().width;
    let height = this.customization.scrollHeight;
    let computedStyle = getComputedStyle(this.block);
    let borderWidth = computedStyle.borderTopWidth;
    let borderColor = computedStyle.borderTopColor;
    let borderRadius = computedStyle.borderTopLeftRadius;
    

    if (bottom > clientHeight) {
      this.style = this.customization.style;
      let difference = bottom - clientHeight;
      this.style.top = `-${difference}px`;
      this.style.border = this.borderStyle;
      this.style.borderRadius = this.borderRadius;
   }

  }

  export function endDigit(quantity, ...digits) {
    for (let digit of digits) {
        if ((quantity % 10 == digit)&&(quantity - digit) / 10 % 10 != 1) return true;
    }
    return false;
}