import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <StrictMode> */}
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
    {/* </StrictMode> */}
  </BrowserRouter>
);
