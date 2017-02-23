import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import Layout from './LayoutComponent.jsx';
import Catalog from './Catalog/CatalogComponent.jsx';
import ProductDetail from './ProductDetail/ProductDetailComponent.jsx';

require("font-awesome-sass-loader");
require('./main.scss');

// TODO: Combine reducers once written
//const reducers = combineReducers(Object.assign({}, CartReducer));

// TODO: Fill with semi-realistic data; Move to external JSON file
const initialState = {
  products: [
    {
      id: 1,
      name: 'Product 1',
      description: 'I\'m the description for Product 1',
      price: 10.50,
      imageUrl: 'http://placehold.it/250x250',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'I\'m the description for Product 2',
      price: 9.99,
      imageUrl: 'http://placehold.it/250x250',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'I\'m the description for Product 3',
      price: .99,
      imageUrl: 'http://placehold.it/250x250',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'I\'m the description for Product 4',
      price: 20.00,
      imageUrl: 'http://placehold.it/250x250',
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'I\'m the description for Product 5',
      price: 49.99,
      imageUrl: 'http://placehold.it/250x250',
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'I\'m the description for Product 6',
      price: 14.99,
      imageUrl: 'http://placehold.it/250x250',
    },
  ],
  cart: [],
};

const store = createStore((state = []) => state, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Catalog} />
        <Route path="catalog" component={Catalog} />
        <Route path="detail/:productId" component={ProductDetail} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('#root')
);
