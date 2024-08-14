import { LOGIN_SUCCESS, LOGOUT } from '../constants/authConstants';
import authService from '../../services/authService';

export const login = (email, password) => async (dispatch) => {
	  try {
		      const data = await authService.login(email, password);
		      dispatch({ type: LOGIN_SUCCESS, payload: data });
		    } catch (error) {
			        console.error('Login failed:', error);
			      }
};

export const logout = () => (dispatch) => {
	  authService.logout();
	  dispatch({ type: LOGOUT });
};
