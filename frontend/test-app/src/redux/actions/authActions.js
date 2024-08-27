// src/redux/actions/authActions.js

import { login as loginService, register as registerService, logout as logoutService } from '../../services/authService';

// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

// Action Creators

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const data = await loginService(email, password);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message || 'Login failed' });
  }
};

export const logout = () => (dispatch) => {
  logoutService();
  dispatch({ type: LOGOUT });
};
