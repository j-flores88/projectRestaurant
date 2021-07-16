import { renderElement } from "./renderElement";
import '../dist/style.css'

const welcomeTitle = renderElement('div', 'H1', ['ALMA', 'LATINA'], 'title')
const subTitle = renderElement('div', 'p', ['FINE MEXICAN CUISINE'], 'subTitle')

export { welcomeTitle, subTitle }