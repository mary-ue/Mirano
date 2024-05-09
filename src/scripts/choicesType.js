import { store } from "./Store";

export const initChoicesType = () => {
  const typeChoies = document.querySelector('.filter__choices_type');

  const updateTypeChoicesVisibility = () => {
    const category = store.getCategories();

    if (category.size) {
      typeChoies.style.display = '';
      // !todo обновить категории
    } else {
      typeChoies.style.display = 'none';
    }
  };

  store.subscribe(updateTypeChoicesVisibility);

  updateTypeChoicesVisibility();
};
