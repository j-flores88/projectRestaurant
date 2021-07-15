const createHtmlElement = (type, content) => {
    const element = document.createElement(type);
    if(content) element.innerText = content
    return element;
}

export { createHtmlElement };