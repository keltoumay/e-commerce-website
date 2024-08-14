import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCT_SUCCESS } from '../actions/productActions';

const initialState = {
	  products: [],
	  product: null,
};

export default function productReducer(state = initialState, action) {
	  switch (action.type) {
		      case FETCH_PRODUCTS_SUCCESS:
			        return { ...state, products: action.payload };
			      case FETCH_PRODUCT_SUCCESS:
			        return { ...state, product: action.payload };
			      default:
			        return state;
			    }
}
