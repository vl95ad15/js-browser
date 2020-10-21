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

function renderTree(tree) {
  const rootUlElement = document.createElement("ul");

  const liWindow = document.createElement("li");
  rootUlElement.append(liWindow);
  liWindow.innerHTML = "Window";

  const ulWindow = document.createElement("ul");
  rootUlElement.append(ulWindow);

  const liDOM = document.createElement("li");
  ulWindow.append(liDOM);
  liDOM.innerHTML = "DOM - Document Object Model; DOM Tree";

  const ulDOM = document.createElement("ul");
  ulWindow.append(ulDOM);

  const liDocument = document.createElement("li");
  ulDOM.append(liDocument);
  liDocument.innerHTML = "Document";

  const liCSSOM = document.createElement("li");
  ulDOM.append(liCSSOM);
  liCSSOM.innerHTML = "CSSOM - CSS Object Model";

  const liBOM = document.createElement("li");
  ulWindow.append(liBOM);
  liBOM.innerHTML = "BOM - Browser Object Model";

  const ulBOM = document.createElement("ul");
  ulWindow.append(ulBOM);

  const liNavigator = document.createElement("li");
  ulBOM.append(liNavigator);
  liNavigator.innerHTML = "Navigator";

  const liScreen = document.createElement("li");
  ulBOM.append(liScreen);
  liScreen.innerHTML = "Screen";

  const liLocation = document.createElement("li");
  ulBOM.append(liLocation);
  liLocation.innerHTML = "Location";

  const liFrames = document.createElement("li");
  ulBOM.append(liFrames);
  liFrames.innerHTML = "Frames";

  const liHistory = document.createElement("li");
  ulBOM.append(liHistory);
  liHistory.innerHTML = "History";

  const liXML = document.createElement("li");
  ulBOM.append(liXML);
  liXML.innerHTML = "XMLHttpReques";

  const liJavaScript = document.createElement("li");
  ulWindow.append(liJavaScript);
  liJavaScript.innerHTML = "JavaScript";

  const ulJavaScript = document.createElement("ul");
  ulWindow.append(ulJavaScript);

  const liObject = document.createElement("li");
  ulJavaScript.append(liObject);
  liObject.innerHTML = "Object";

  const liArray = document.createElement("li");
  ulJavaScript.append(liArray);
  liArray.innerHTML = "Array";

  const liFunction = document.createElement("li");
  ulJavaScript.append(liFunction);
  liFunction.innerHTML = "Function";

  const liEtc = document.createElement("li");
  ulJavaScript.append(liEtc);
  liEtc.innerHTML = "...";

  // convert tree into elements

  return rootUlElement;
}

export function renderPage() {
  const browserTreeList = renderTree(browserTree);
  // const nodesHierarchyList = renderTree(nodesHierarchy);

  const rootDiv = document.getElementById("root");
  rootDiv.append(browserTreeList);
 //  rootDiv.append(nodesHierarchyList);
}
