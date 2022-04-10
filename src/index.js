import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './components/user.context/user.context.component'
import { CategoryProvider } from './components/category.context/category.context';
import { ShoppingCartProvider } from './components/shoppingcart.context/shoppingcart.context.component';

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <UserProvider>
        <CategoryProvider>
          <ShoppingCartProvider>
            <App />
          </ShoppingCartProvider>
        </CategoryProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
