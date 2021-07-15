import { renderOnPage } from "./renderOnPage";
import { navBar } from './navBar';
import { welcomeTitle, subTitle } from "./welcome";
const content = document.getElementById('content');

const homeScren = () => {
    renderOnPage('nav', navBar)
    renderOnPage('main', welcomeTitle)
    renderOnPage('main', subTitle)
}

homeScren();

export { content }