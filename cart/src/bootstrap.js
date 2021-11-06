import faker from 'faker';

let cartEl = `<div>You have ${faker.random.number()} itens in your cart!</div>`;

document.querySelector('#dev-cart').innerHTML = cartEl;