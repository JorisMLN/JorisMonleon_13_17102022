import { createSlice, configureStore } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CounterState {
  value: number
  // name: string
};

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  // name: ''
} 

const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    }
  }
});

// const loginSlice = createSlice({
//   name: 'login',
//   // `createSlice` will infer the state type from the `initialState` argument
//   initialState,
//   reducers: {
//     storeName: state => {
//       state.name = 'bla';
//     },
//   }
// });

// const store = configureStore({
//   reducer: {
//     count: counterSlice.reducer,
//     name: loginSlice.reducer
//   }
// })

const store = configureStore({
  reducer: counterSlice.reducer
})

store.subscribe(() => console.log(store.getState()));

export const { increment, decrement } = counterSlice.actions;
export default store;