export const createElement = (nodeType, className = '') => {
    const newNode = document.createElement(nodeType);
    newNode.className = className;
    return newNode;
}

export const setTextOfNode = (node, text) => {
    node.textContent = text;
}