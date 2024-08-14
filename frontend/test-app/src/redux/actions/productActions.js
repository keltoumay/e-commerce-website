import { getProducts, getProductById } from '../../services/productService'; // Import both functions

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';

export const fetchProducts = () => async (dispatch) => {
  try {
    const products = await getProducts(); // Use the named import
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
  } catch (error) {
    // Handle error
    console.error('Error fetching products:', error);
  }
};

export const fetchProductById = (id) => async (dispatch) => {
  try {
    const product = await getProductById(id); // Use the named import
    dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: product });
  } catch (error) {
    // Handle error
    console.error('Error fetching product by ID:', error);
  }
};