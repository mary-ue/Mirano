import { fetchProducts } from './api';
import { debounce } from './debounce';
import { callBackWithPreload } from './preload';

export const filterProducts = () => {
  const filterForm = document.querySelector('.filter__form');
  const goodsTitle = document.querySelector('.goods__title');
  const goodsSection = document.querySelector('.goods');

  const applyFilters = () => {
    const formData = new FormData(filterForm);
    const type = formData.get('type');
    const minPrice = formData.get('minPrice');
    const maxPrice = formData.get('maxPrice');
    const params = {};

    if (type) {
      params.type = type;
    }

    if (minPrice) {
      params.minPrice = minPrice;
    }

    if (maxPrice) {
      params.maxPrice = maxPrice;
    }

    callBackWithPreload(goodsSection, fetchProducts, params);
  };

  applyFilters();

  const applyPriceFilters = debounce(applyFilters, 300);

  filterForm.addEventListener('input', (evt) => {
    const target = evt.target;

    if (target.name === 'type') {
      goodsTitle.textContent = target.labels[0].textContent;

      filterForm.maxPrice.value = '';
      filterForm.minPrice.value = '';
      applyFilters();
      return;
    } 

    if (target.name === 'minPrice' || target.name === 'maxPrice') {
      applyPriceFilters();
    }
  });
};
