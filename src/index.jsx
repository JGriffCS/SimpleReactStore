import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import Layout from './containers/LayoutContainer';
import Catalog from './containers/CatalogContainer';
import ProductDetail from './containers/ProductDetailContainer';
import Checkout from './containers/CheckoutContainer';

import { products } from '../assets/json/products.json';

require("font-awesome-sass-loader");
require('./styles/main.scss');

import { cart } from './reducers/cart';
import { orders } from './reducers/orders';

const initialState = {
  products: products,
  cart: {
    visible: false,
    items: [],
  },
  orders: [],
};

const reducers = combineReducers({
  cart,
  orders,
  products: (state = []) => state,
});

const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRedirect to="/catalog" />
        <Route path="/catalog" component={Catalog} />
        <Route path="/detail/:productId" component={ProductDetail} />
        <Route path="/checkout" component={Checkout} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('#root')
);
