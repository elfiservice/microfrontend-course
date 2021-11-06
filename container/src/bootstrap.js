
import { mount as productAppMount } from 'productsRemote/ProductsApp';
import { mount as cartAppMount } from 'cartRemote/cartApp';

console.log('Container!!');

productAppMount(document.querySelector('#products-root'));
cartAppMount(document.querySelector('#cart-root'));
