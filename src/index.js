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

function renderTree(tree) {
  const rootUlElement = document.createElement("ul");

  // convert tree into elements

  return rootUlElement;
}

export function renderPage() {
  const browserTreeList = renderTree(browserTree);
  const nodesHierarchyList = renderTree(nodesHierarchy);

  const rootDiv = document.getElementById("root");
  rootDiv.append(browserTreeList);
  rootDiv.append(nodesHierarchyList);
}
