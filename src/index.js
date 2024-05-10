import '@/scss/index.scss';
import {initHeaderFixer} from '@/scripts/headerFixer';
import { initChoices } from './scripts/choices';
import { initCart } from './scripts/cart';
import { renderProducts } from './scripts/renderProducts';
import { fetchProducts } from './scripts/api';
import { initChoicesType } from './scripts/choicesType';
import { filterProducts } from './scripts/filterProducts';

const init = () => {
  initHeaderFixer();
  initChoices();
  initChoicesType();
  initCart();
  // fetchProducts({ type: 'bouquets'});
  renderProducts();
  filterProducts();
}

init();
