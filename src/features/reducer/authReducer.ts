import { createSlice, configureStore } from '@reduxjs/toolkit';
import { axiosInstance } from '../../api/requestsManager';

// Define a type for the slice state
interface AuthState {
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
  firstName: 'Tonui',
  lastName: 'asd;kljas'
} 

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeLogin: (state, action) => {
      state.login = action.payload
      console.log(state, action)
    },
    storeToken: (state, action) => {
      state.token = action.payload
      axiosInstance.defaults.headers.Authorization = 'Bearer ' + action.payload;
      console.log(state, action)
    },
    storeFirstName: (state, action) => {
      state.firstName = action.payload
      console.log(state, action)
    },
    storeLastName: (state, action) => {
      state.lastName = action.payload
      console.log(state, action)
    },
  }
});

const store = configureStore({
  reducer: authSlice.reducer
})

store.subscribe(() => console.log(store.getState()));

export const { storeLogin, storeToken, storeFirstName, storeLastName } = authSlice.actions;
export default store;