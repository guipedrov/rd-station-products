import axios from 'axios';
import getProducts from './product.service';
import mockProducts from '../mocks/mockProducts';

jest.mock('axios', () => ({ get: jest.fn() }));

describe('productService', () => {
  const mockUrl = 'http://localhost:3001/products';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Retorna os dados dos produtos quando a requisição obtiver sucesso', async () => {
    axios.get.mockResolvedValue({ data: mockProducts });

    const response = await getProducts();

    expect(axios.get).toHaveBeenCalledWith(mockUrl);
    expect(response).toEqual(mockProducts);
  });
});
