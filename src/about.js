import { renderElement } from "./renderElement";

const about = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod'
];

const aboutHeader = renderElement('div', 'p', ['De', 'Nosotros'], null)
const aboutUs = renderElement('div', 'p', [about], null);

export { aboutHeader, aboutUs };