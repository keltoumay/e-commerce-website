import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import productService from '../services/productService';

function HomePage() {
	  const [products, setProducts] = useState([]);

	  useEffect(() => {
		      const fetchProducts = async () => {
			            const data = await productService.getProducts();
			            setProducts(data);
			          };

		      fetchProducts();
		    }, []);

	  return (
		      <div>
		        <h1>Home Page</h1>
		        <ProductList products={products} />
		      </div>
		    );
}

export default HomePage;
