import { useRoutes, Navigate } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/cONTACT.JSX';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import Profile from './pages/Profile';
import UpdateAccount from './pages/UpdateAccount';
import Layout from './components/Layout.jsx';
import useAuthen from './hooks/useAuthen.jsx';
import Checkout from './pages/Checkout.jsx';
import HomeAdmin from './pages/admin/Home.jsx';
import AddProduct from './pages/admin/AddProduct.jsx';
import ListProduct from './pages/admin/ListProduct.jsx';
import UpdateProduct from './pages/admin/UpdateProduct.jsx';
import AccountPage from './pages/admin/Account.jsx';
import UpdateAccountAdmin from './pages/admin/UpdateAccountPage.jsx';
import ProfileAdmin from './pages/admin/ProfileAdmin.jsx';
import OrderAdmin from './pages/admin/OrderAdmin.jsx';
import UpdateOrder from './pages/admin/UpdateOrder.jsx';
import AdminLayout from './layout/Admin.jsx';
import { useEffect, useState } from 'react';
const withLayout = (Component) => (
  <Layout>
    <Component />
  </Layout>
);

const PrivateRoute = ({ element }) => {
  const isAuthen = useAuthen();
  return isAuthen ? element : <Navigate to="/login" replace />;
};

const routerConfig = [
  { path: '/', element: withLayout(Home) },
  { path: '/shop', element: withLayout(Shop) },
  { path: '/about', element: withLayout(About) },
  { path: '/contact', element: withLayout(Contact) },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/product-detail/:id', element: withLayout(ProductDetail) },
  { path: '/profile/:id', element: withLayout(Profile) },
  { path: '/updateaccount/:id', element: withLayout(UpdateAccount) },
  {
    path: '/shopping-cart',
    element: <PrivateRoute element={withLayout(ShoppingCart)} />,
  },
  { path: '/checkout', element: withLayout(Checkout) },

  {
    path: '/admin',
    element: <AdminLayout />,
      children: [
        { path: '', element: <Navigate to="home" replace /> },
        { path: 'home', element: <HomeAdmin /> },
        { path: 'addproduct', element: <AddProduct /> },
        { path: 'listproduct', element: <ListProduct /> },
        { path: 'updateproduct/:id', element: <UpdateProduct /> },
        { path: 'listaccount', element: <AccountPage /> },
        { path: 'listorder', element: <OrderAdmin /> },
        { path: 'updateorder/:id', element: <UpdateOrder /> },
        { path: 'updateaccount/:id', element: <UpdateAccountAdmin /> },
        { path: 'profile/:id', element: <ProfileAdmin /> },
      ],
    },

  { path: '*', element: <Error /> },
];

function App() {
  const routers = useRoutes(routerConfig);
  return <>{routers}</>;
}

export default App;
