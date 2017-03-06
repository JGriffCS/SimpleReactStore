import { ProductSelector } from '../../src/selectors/product.js';

describe('product selectors', () => {
  const products = [
    { id: 1, name: 'product 1', description: 'desc', price: 1.99 },
    { id: 2, name: 'product 2', description: 'desc', price: 1.99 },
  ];

  it('should correcty map the correct product from the store', () => {
    const { product } = ProductSelector({ products }, { params: { productId: '2', }, });

    expect(product).toEqual({ id: 2, name: 'product 2', description: 'desc', price: 1.99 });
  });
});
