import { createSlice, configureStore } from '@reduxjs/toolkit';

// Define a type for the slice state
interface AuthState {
  login: string
  userId: string;
  token: string
};

// Define the initial state of the this Reducer
const initialState: AuthState = {
  login: '',
  userId: '',
  token: ''
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
      console.log(state, action)
    }
  }
});

const store = configureStore({
  reducer: authSlice.reducer
})

store.subscribe(() => console.log(store.getState()));

export const { storeLogin, storeToken } = authSlice.actions;
export default store;