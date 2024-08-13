mport productService from '../../services/productService';

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';

export const fetchProducts = () => async (dispatch) => {
	  const products = await productService.getProducts();
	  dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
};

export const fetchProductById = (id) => async (dispatch) => {
	  const product = await productService.getProductById(id);
	  dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: product });
};
