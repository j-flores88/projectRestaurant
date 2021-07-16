import { renderOnPage } from "./renderOnPage";
import { navBar } from './navBar';
import { welcomeTitle, subTitle } from "./welcome";
import { footerElement } from "./footer";
import { finalMenu } from "./menu";
import { aboutHeader, aboutUs } from "./about";

const content = document.getElementById('content');

const homeScreen = () => {
    content.innerHTML = '';
    renderOnPage('nav', navBar)
    renderOnPage('main', welcomeTitle)
    renderOnPage('main', subTitle)
    renderOnPage('footer', footerElement)
}

const showMenu = () => {
    content.innerHTML = '';
    renderOnPage('nav', navBar)
    renderOnPage('main', finalMenu)
    renderOnPage('footer', footerElement)
}

const showAboutUs = () => {
    content.innerHTML = '';
    renderOnPage('nav', navBar)
    renderOnPage('main', aboutHeader)
    renderOnPage('main', aboutUs)
    renderOnPage('footer', footerElement)
}

document.addEventListener('click', (e) => {
    const target = e.target.innerText;
    if(target === 'HOME') homeScreen();
    if(target === 'MENU') showMenu();
    if(target === 'ABOUT') showAboutUs();
})

homeScreen();

export { content }