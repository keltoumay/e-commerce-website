mport { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/authReducer';
import productReducer from './reducers/productReducer';
import orderReducer from './reducers/orderReducer';

const rootReducer = combineReducers({
	  auth: authReducer,
	  products: productReducer,
	  orders: orderReducer,
});

const store = createStore(
	  rootReducer,
	  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
