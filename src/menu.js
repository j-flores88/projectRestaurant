import { renderElement } from "./renderElement";

const restaurantMenu = {
    itemOne: [
        'Enchiladas',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet',
        '$25'
    ],
    itemTwo: [
        'Birria',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet',
        '$30'
    ],
    itemThree: [
        'Flan',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet',
        '$15'
    ]
}

let menuItem; 

const renderMenu = (menu) => {
    const menuDiv = document.createElement('div');

    for(let food in menu) {
        menuDiv.appendChild(renderElement('div', 'p', menu[food], null));
    }
    return menuDiv
}

const menuTitle = renderElement('div', 'p', ['COMIDA'], 'title');
const finalMenu = renderMenu(restaurantMenu);

export { finalMenu, menuTitle };