/* eslint-disable import/prefer-default-export */

function renderArray(array) {
  const p = document.createElement("p");
  p.innerHTML = JSON.stringify(array);

  return p;
}

export { renderArray };