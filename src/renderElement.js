import { createHtmlElement } from "./createHtmlElement";

const renderElement = (typeOne, typeTwo, sections, classes) => {
    const newEl = document.createElement(typeOne);
    if(classes) {newEl.classList.add(classes)}

    sections.forEach(section => {
        newEl.appendChild(createHtmlElement(typeTwo, section))
    });

    return newEl;
}

export { renderElement };