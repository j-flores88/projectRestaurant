import { renderElement } from "./renderElement";

const welcomeTitle = renderElement('div', 'p', ['Alma', 'Latina'], null)
const subTitle = renderElement('div', 'p', ['Fine Mexican Cuisine'], null)

export { welcomeTitle, subTitle }