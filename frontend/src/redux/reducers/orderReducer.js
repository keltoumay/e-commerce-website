mport { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../actions/orderActions';

const initialState = {
	  cartItems: [],
};

export default function orderReducer(state = initialState, action) {
	  switch (action.type) {
		      case ADD_TO_CART:
			        return { ...state, cartItems: [...state.cartItems, action.payload] };
			      case REMOVE_FROM_CART:
			        return {
					        ...state,
					        cartItems: state.cartItems.filter(item => item._id !== action.payload),
					      };
			      case CLEAR_CART:
			        return { ...state, cartItems: [] };
			      default:
			        return state;
			    }
}
