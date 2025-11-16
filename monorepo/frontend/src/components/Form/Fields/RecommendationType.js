import Checkbox from '../../shared/Checkbox';

function RecommendationType({ onRecommendationTypeChange }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Tipo de Recomendação:</h2>
      <div className="flex flex-row gap-x-4">
        <div className="flex">
          <Checkbox
            id="SingleProduct"
            type="radio"
            name="recommendationType"
            value="SingleProduct"
            onChange={() => onRecommendationTypeChange('SingleProduct')}
            className="mr-1"
          />
          <label
            htmlFor="SingleProduct"
            className="cursor-pointer text-md lg:text-lg"
          >
            Produto Único
          </label>
        </div>
        <div className="flex">
          <Checkbox
            id="MultipleProducts"
            type="radio"
            name="recommendationType"
            value="MultipleProducts"
            onChange={() => onRecommendationTypeChange('MultipleProducts')}
            className="mr-1"
          />
          <label
            htmlFor="MultipleProducts"
            className="cursor-pointer text-md lg:text-lg"
          >
            Múltiplos Produtos
          </label>
        </div>
      </div>
    </div>
  );
}

export default RecommendationType;
