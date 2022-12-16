import { createSlice, configureStore } from '@reduxjs/toolkit';
import { axiosInstance } from '../../api/requestsManager';

// Define a type for the slice state
export interface AuthState {
  login: string
  userId: string
  token: string
  firstName: string
  lastName: string
};

// Define the initial state of the this Reducer
const initialState: AuthState = {
  login: '',
  userId: '',
  token: '',
  firstName: '',
  lastName: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    storeLogin: (state, action) => {
      state.login = action.payload
    },

    storeToken: (state, action) => {
      state.token = action.payload
      axiosInstance.defaults.headers.Authorization = 'Bearer ' + action.payload;
    },

    storeFirstName: (state, action) => {
      state.firstName = action.payload
    },

    storeLastName: (state, action) => {
      state.lastName = action.payload
    },

    clearStore: (state, action) => {
      state.login = action.payload
      state.userId = action.payload
      state.token = action.payload
      state.firstName = action.payload
      state.lastName = action.payload
    }
  }
});

const store = configureStore({
  reducer: authSlice.reducer
})

store.subscribe(() => console.log(store.getState()));

export const { storeLogin, storeToken, storeFirstName, storeLastName, clearStore } = authSlice.actions;
export default store;