// Show if an element has a class
const has = (id, someClass) => {
  let el = document.getElementById(id);
  if (!el) {
    console.error('No such id.');
    return null;
  }
  return el.classList.contains(someClass);
};

