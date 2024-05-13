import { fetchProducts } from "./api";
import { callBackWithPreload } from "./preload";

export const initSearchProducts = () => {
  const goodsSection = document.querySelector('.goods');
  const headerForm = document.querySelector('.header__form');
  const goodsTitle = document.querySelector('.goods__title');

  headerForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(headerForm);

    const searchQuery = formData.get('search').trim();

    if (searchQuery) {
      goodsTitle.textContent = 'Результат поиска';
      callBackWithPreload(goodsSection, fetchProducts, { search: searchQuery });
    }
  })
}