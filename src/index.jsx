import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import Layout from './containers/LayoutContainer.jsx';
import Catalog from './containers/CatalogContainer.jsx';
import ProductDetail from './containers/ProductDetailContainer.jsx';

require("font-awesome-sass-loader");
require('./styles/main.scss');

import { cart } from './reducers/cart.js';

// TODO: Fill with semi-realistic data; Move to external JSON file
const initialState = {
  products: [
    {
      id: 1,
      name: 'Product 1',
      description:
      `This is the description for Product 1! It would normally tell you
       anything you could ever desire to know about the product! It's truly
       a great product. Just ask anyone!`,
      price: 10.50,
      thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
      smallImageUrl: 'http://placehold.it/250/032c6d/ffffff',
      imageUrl: 'http://placehold.it/550/032c6d/ffffff',
    },
    {
      id: 2,
      name: 'Product 2',
      description:
      `This is the description for Product 2! It would normally tell you
       anything you could ever desire to know about the product! It's truly
       a great product. Just ask anyone!`,
      price: 9.99,
      thumbnailUrl: 'http://placehold.it/50/b50505/ffffff',
      smallImageUrl: 'http://placehold.it/250/b50505/ffffff',
      imageUrl: 'http://placehold.it/550/b50505/ffffff',
    },
    {
      id: 3,
      name: 'Product 3',
      description:
      `This is the description for Product 3! It would normally tell you
       anything you could ever desire to know about the product! It's truly
       a great product. Just ask anyone!`,
      price: .99,
      thumbnailUrl: 'http://placehold.it/50/c66101/ffffff',
      smallImageUrl: 'http://placehold.it/250/c66101/ffffff',
      imageUrl: 'http://placehold.it/550/c66101/ffffff',
    },
    {
      id: 4,
      name: 'Product 4',
      description:
      `This is the description for Product 4! It would normally tell you
       anything you could ever desire to know about the product! It's truly
       a great product. Just ask anyone!`,
      price: 20.00,
      thumbnailUrl: 'http://placehold.it/50/2bc601/ffffff',
      smallImageUrl: 'http://placehold.it/250/2bc601/ffffff',
      imageUrl: 'http://placehold.it/550/2bc601/ffffff',
    },
    {
      id: 5,
      name: 'Product 5',
      description:
      `This is the description for Product 5! It would normally tell you
       anything you could ever desire to know about the product! It's truly
       a great product. Just ask anyone!`,
      price: 49.99,
      thumbnailUrl: 'http://placehold.it/50/01b8c6/ffffff',
      smallImageUrl: 'http://placehold.it/250/01b8c6/ffffff',
      imageUrl: 'http://placehold.it/550/01b8c6/ffffff',
    },
    {
      id: 6,
      name: 'Product 6',
      description:
      `This is the description for Product 6! It would normally tell you
       anything you could ever desire to know about the product! It's truly
       a great product. Just ask anyone!`,
      price: 14.99,
      thumbnailUrl: 'http://placehold.it/50/72015f/ffffff',
      smallImageUrl: 'http://placehold.it/250/72015f/ffffff',
      imageUrl: 'http://placehold.it/550/72015f/ffffff',
    },
  ],
  cart: [],
};
// TODO: Combine reducers once written
const reducers = combineReducers({
  cart,
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
      </Route>
    </Router>
  </Provider>,
  document.querySelector('#root')
);
