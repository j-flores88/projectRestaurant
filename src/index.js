import { navBar } from "./navbar";

const content = document.getElementById('content');

const renderPage = (navigation, main, footer) => {
    const navMenu = document.createElement('nav')
    navMenu.appendChild(navBar)
    content.appendChild(navMenu);
}

renderPage(navBar, null, null)

export { content }