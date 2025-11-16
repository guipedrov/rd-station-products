import { render, screen } from '@testing-library/react';
import RecommendationList from './RecommendationList';
import mockProducts from '../../mocks/mockProducts';

describe('FC RecommendationList', () => {
  test('Renderiza o título da página', () => {
    render(<RecommendationList recommendations={[]} />);

    expect(screen.getByText('Lista de Recomendações:')).toBeInTheDocument();
  });

  test('Renderiza a mensagem de aviso caso não haja recomendações', () => {
    render(<RecommendationList recommendations={[]} />);

    expect(
      screen.getByText('Nenhuma recomendação encontrada.')
    ).toBeInTheDocument();
  });

  test('Não renderiza a mensagem de aviso caso haja recomendações', () => {
    render(<RecommendationList recommendations={[mockProducts[0]]} />);

    expect(
      screen.queryByText('Nenhuma recomendação encontrada.')
    ).not.toBeInTheDocument();
  });

  test('Renderiza o nome de cada produto contido nas recomendações', () => {
    const mockData = [mockProducts[0], mockProducts[1]];

    render(<RecommendationList recommendations={mockData} />);

    expect(screen.getByText('RD Station CRM')).toBeInTheDocument();
    expect(screen.getByText('RD Station Marketing')).toBeInTheDocument();
  });
});
