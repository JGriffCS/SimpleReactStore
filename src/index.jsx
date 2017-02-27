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

import { cart } from './reducers/cart.js';

// TODO: Fill with semi-realistic data; Move to external JSON file
const initialState = {
  products: products,
  cart: {
    visible: false,
    items: [],
  },
};
// TODO: Combine reducers once written
const reducers = combineReducers({
  cart,
  showCart: (state = []) => state,
  products: (state = []) => state,
});

const store = createStore(reducers, initialState);

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
