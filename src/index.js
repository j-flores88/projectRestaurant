import { renderOnPage } from "./renderOnPage";
import { navBar } from './navBar';
import { welcomeTitle, subTitle } from "./welcome";
import { footerElement } from "./footer";
import { finalMenu } from "./menu";

const content = document.getElementById('content');

const homeScreen = () => {
    renderOnPage('nav', navBar)
    // renderOnPage('main', welcomeTitle)
    // renderOnPage('main', subTitle)
    renderOnPage('main', finalMenu)
    renderOnPage('footer', footerElement)
}

homeScreen();

export { content }