import { fetchProducts } from './api';

const filterType = type => {
  fetchProducts({ type: type.value });
}

export const filterProducts = () => {
  const filterForm = document.querySelector('.filter__form');
  filterType(filterForm.type);

  filterForm.addEventListener('input', (evt) => {
    const target = evt.target;

    if (target.name === 'type') {
      filterType(filterForm.type);
    }
  });
};
