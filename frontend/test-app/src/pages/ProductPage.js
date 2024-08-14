import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../services/productService';

function ProductPage() {
	  const { id } = useParams();
	  const [product, setProduct] = useState(null);

	  useEffect(() => {
		      const fetchProduct = async () => {
			            const data = await productService.getProductById(id);
			            setProduct(data);
			          };

		      fetchProduct();
		    }, [id]);

	  return (
		      <div>
		        {product ? (
				        <>
				          <h1>{product.name}</h1>
				          <p>{product.description}</p>
				          <p>Price: {product.price}</p>
				        </>
				      ) : (
					              <p>Loading...</p>
					            )}
		      </div>
		    );
}

export default ProductPage;
