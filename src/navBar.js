import { renderElement } from "./renderElement";

const navMenu = ['Home', 'Menu', 'About'];

const navBar = renderElement('ul', 'li', navMenu, null)//, '.navBar')

export { navBar };