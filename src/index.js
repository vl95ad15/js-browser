/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

import { nodesHierarchy } from "../model/nodesHierarchy.mjs"
import { browserTree } from "../model/browserTree.mjs"
import { renderTreeToList, flatten } from "../rendering/types/numberedList.mjs"
import { renderTree } from "../rendering/types/unnumberedList.mjs"
import { renderArray } from "../rendering/types/inline.mjs"

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
