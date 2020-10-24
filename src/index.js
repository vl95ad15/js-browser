/* eslint-disable import/prefer-default-export */
const browserTree = {
  label: "Window",
  children: [
    {
      label: "DOM - Document Object Model; DOM Tree",
      children: [
        {
          label: "document",
          children: [],
        },
        {
          label: "CSSOM - CSS Object Model",
          children: [],
        },
      ],
    },
    {
      label: "BOM - Browser Object Model",
      children: [
        {
          label: "navigator",
          children: [],
        },
        {
          label: "screen",
          children: [],
        },
        {
          label: "location",
          children: [],
        },
        {
          label: "frames",
          children: [],
        },
        {
          label: "history",
          children: [],
        },
        {
          label: "XMLHttpReques",
          children: [],
        },
      ],
    },
    {
      label: "JavaScript",
      children: [
        {
          label: "Object",
          children: [],
        },
        {
          label: "Array",
          children: [],
        },
        {
          label: "Function",
          children: [],
        },
        {
          label: "...",
          children: [],
        },
      ],
    },
  ],
};

const nodesHierarchy = {
  label: "EventTarget",
  children: [
    {
      label: "Node",
      children: [
        {
          label: "Text",
          children: [],
        },
        {
          label: "Comment",
          children: [],
        },
        {
          label: "Element",
          children: [
            {
              label: "SVGElement",
              children: [],
            },
            {
              label: "HTMLElement",
              children: [
                {
                  label: "HTMLInputElement",
                  children: [],
                },
                {
                  label: "HTMLBodyElement",
                  children: [],
                },
                {
                  label: "HTMLAnchorElement",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

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

function renderTree(treeArray) {
  if (treeArray.length === 0) return null;

  const rootUlElement = document.createElement("ul");

  treeArray.forEach((node) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = node.label;
    rootUlElement.append(liElement);

    const subTree = renderTree(node.children);
    if (subTree !== null) rootUlElement.append(subTree);
  });

  return rootUlElement;
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

function renderArray(array) {
  const p = document.createElement("p");
  p.innerHTML = JSON.stringify(array);

  return p;
}

export function renderPage() {
  const tree = renderTree([browserTree, nodesHierarchy]);
  const flatTreeFromBrowserTree = flatten(browserTree);
  const flatTreeFromNodesHierarchy = flatten(nodesHierarchy);
  
  const listFromBrowserTree = renderTreeToList(flatTreeFromBrowserTree);
  const listFromNodesHierarchy = renderTreeToList(flatTreeFromNodesHierarchy);

  const rootDiv = document.getElementById("root");

  if (tree !== null) rootDiv.append(tree);
  if (listFromBrowserTree !== null) rootDiv.append(listFromBrowserTree);
  if (listFromNodesHierarchy !== null) rootDiv.append(listFromNodesHierarchy);
  rootDiv.append(renderArray(flatTreeFromBrowserTree));
  rootDiv.append(renderArray(flatTreeFromNodesHierarchy));
}
