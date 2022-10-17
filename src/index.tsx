import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.scss';
import LoginFrame from './layout/login/LoginFrame';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginFrame />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);

