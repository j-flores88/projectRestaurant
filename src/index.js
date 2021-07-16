import { renderOnPage } from "./renderOnPage";
import { navBar } from './navBar';
import { welcomeTitle, subTitle } from "./welcome";
import { footerElement } from "./footer";
import { finalMenu, menuTitle } from "./menu";
import { aboutHeader, aboutUs } from "./about";
import { generateImage } from "./generateImage";
import flame from './flame.png'

const content = document.getElementById('content');

const showScreen = (size, main, sub) => {
    content.innerHTML = '';
    renderOnPage('nav', navBar);
    renderOnPage('main', generateImage(flame, size))
    renderOnPage('main', main)
    renderOnPage('main', sub)
    renderOnPage('footer', footerElement);
}

document.addEventListener('click', (e) => {
    const target = e.target.innerText;
    if(target === 'HOME') showScreen(200, welcomeTitle, subTitle);
    if(target === 'MENU') showScreen(100, menuTitle, finalMenu);
    if(target === 'ABOUT') showScreen(100, aboutHeader, aboutUs);
})

showScreen(200, welcomeTitle, subTitle);

export { content }