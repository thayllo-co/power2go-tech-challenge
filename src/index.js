import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/home';
import Consult from './pages/consult/consult';
import Historic from './pages/historic/historic';
import 'react-toastify/dist/ReactToastify.css'; //CSS necessário para usar a biblioteca react-toastify

// Criando rota para poder navegar usando caminhos na URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/consult',
    element: <Consult />,
  },
  {
    path: '/historic',
    element: <Historic />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/*  Implementa a rota no usando um provedor no componente principal */}
  </React.StrictMode>
);