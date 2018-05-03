const showChild = (node, index) => {
  if (node.nodeType !== document.ELEMENT_NODE) {
    console.error("Not an element node.");
    return null;
  }
  if (index >= node.childNodes.length) {
    console.error("Index out of range.");
    return null;
  }
  return node.childNodes[index];
};
