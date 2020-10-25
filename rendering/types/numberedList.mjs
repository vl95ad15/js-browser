/* eslint-disable import/prefer-default-export */

function createLiElement(text) {             
  const li = document.createElement("li");
  li.innerHTML = text;
  return li;
}

function renderTreeToList(treeArray) {
  const list = document.createElement("ol");

  treeArray
    .map((item) => createLiElement(item))
    .forEach((liElement) => list.append(liElement));

  return list;
}

function flatten(tree) {
  const result = [];
  const { label, children } = tree;
  result.push(label);

  if (children.length > 0) {
  children.forEach((item) => {
    result.push(...flatten(item));
  });
}

  return result;
}

export { renderTreeToList, flatten };