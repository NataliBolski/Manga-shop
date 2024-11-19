import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'mangas'));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Ошибка при загрузке товаров: ", error);
      }
    };

    fetchProducts();
  }, []);

  // Обновление строки поиска
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Фильтрация товаров по строке поиска
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );


  return (
    <div>
      <h1>Наши Товары</h1>
      
      {/* Поле поиска */}
      <input
        type="text"
        placeholder="Поиск товаров..."
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {/* Список товаров */}
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Цена: {product.price} тг.</p>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>Добавить в корзину</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
