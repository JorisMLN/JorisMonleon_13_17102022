import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles/index.scss';
import store from './features/reducer/authReducer';

import LoginFrame from './layout/loginFrame/LoginFrame';
import HomeFrame from './layout/homeFrame/HomeFrame';
import BoardFrame from './layout/boardFrame/BoardFrame';
import AccountFrame from './layout/accountFrame/AccountFrame';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeFrame />} />
        <Route path="/login" element={<LoginFrame />} />
        <Route path="/board" element={<BoardFrame />} />
        <Route path="/account" element={<AccountFrame />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

