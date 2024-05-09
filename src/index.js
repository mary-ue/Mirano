import '@/scss/index.scss';
import {initHeaderFixer} from '@/scripts/headerFixer';
import { initChoices } from './scripts/choices';
import { initCart } from './scripts/cart';
import { renderProducts } from './scripts/renderProducts';
import { fetchProducts } from './scripts/api';

const init = () => {
  initHeaderFixer();
  initChoices();
  initCart();
  // fetchProducts({ type: 'toys'});
  renderProducts();
}

init();
