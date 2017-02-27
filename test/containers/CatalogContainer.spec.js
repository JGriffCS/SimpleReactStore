import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import CatalogContainer from '../../src/containers/CatalogContainer';

describe('Catalog Container', function() {
  const mockStore = configureStore();

  it('should display a product cell for each product in the store', () => {
    const products = [
      { id: 1, name: 'product 1', description: 'desc', price: 1.99 },
      { id: 2, name: 'product 2', description: 'desc', price: 1.99 },
      { id: 3, name: 'product 3', description: 'desc', price: 1.99 },
      { id: 4, name: 'product 4', description: 'desc', price: 1.99 },
      { id: 5, name: 'product 5', description: 'desc', price: 1.99 },
    ];
    const wrapper = mount(
      <Provider store={mockStore({ products: products, })}>
        <CatalogContainer />
      </Provider>
    );

    expect(wrapper.find('.catalog-item-container').length).toEqual(5);
  });
});
