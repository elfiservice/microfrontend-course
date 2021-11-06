import faker from 'faker';

const mount = (el) => {
    let cartEl = `<div>You have ${faker.random.number()} itens in your cart!</div>`;

    el.innerHTML = cartEl;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');

  if (el) {
    mount(el);
  }
}

export { mount };
