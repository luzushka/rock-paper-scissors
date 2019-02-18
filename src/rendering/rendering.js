export const createElement = (nodeType, addInsideThisNode, className = '') => {
    const newNode = document.createElement(nodeType);
    newNode.className = className;
    addInsideThisNode.appendChild(newNode);
    return newNode;
}

export const setTextOfNode = (node, text) => {
    node.textContent = text;
}