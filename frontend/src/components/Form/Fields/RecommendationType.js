import Checkbox from '../../shared/Checkbox';

function RecommendationType({ onRecommendationTypeChange }) {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold mb-4">Tipo de Recomendação:</h2>
      <div className="flex items-center">
        <Checkbox
          id="SingleProduct"
          type="radio"
          name="recommendationType"
          value="SingleProduct"
          onChange={() => onRecommendationTypeChange('SingleProduct')}
          className="mr-2"
        />
        <label htmlFor="SingleProduct" className="cursor-pointer mr-6 text-lg lg:text-xl">
          Produto Único
        </label>
        <Checkbox
          id="MultipleProducts"
          type="radio"
          name="recommendationType"
          value="MultipleProducts"
          onChange={() => onRecommendationTypeChange('MultipleProducts')}
          className="mr-2"
        />
        <label htmlFor="MultipleProducts" className="cursor-pointer text-lg lg:text-xl">Múltiplos Produtos</label>
      </div>
    </div>
  );
}

export default RecommendationType;
