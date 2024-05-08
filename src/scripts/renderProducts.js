import { ProductCard } from "./ProductCard";
import { fetchProducts } from "./api"

export const renderProducts = async () => {
  const goodsList = document.querySelector('.goods__list');
  const products = await fetchProducts();
  
  goodsList.innerHTML = '';

  products.forEach(product => {
    const productCard = ProductCard(product);
    goodsList.append(productCard);
  });
};