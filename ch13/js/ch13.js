const showChild = (node, index) => {
  if (node.nodeType !== document.ELEMENT_NODE) {
    console.error("Not an element node.");
    return nil;
  }
  if (index >= node.length) {
    console.error("Index out of range.");
    return nil;
  }
  return node.childNodes[index];
};
