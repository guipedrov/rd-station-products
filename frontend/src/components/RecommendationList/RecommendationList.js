import { StyledRecommendation } from './StyledRecommendation';

function RecommendationList({ recommendations }) {
  return (
    <div className="w-full h-full mx-auto py-5 px-6 rounded-xl bg-white border-2 border-gray-200">
      <h2 className="text-2xl font-bold mb-4">Lista de Recomendações:</h2>

      {recommendations.length === 0 && (
        <p className="text-lg lg:text-xl text-gray-500">
          Nenhuma recomendação encontrada.
        </p>
      )}

      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index}>
            <StyledRecommendation name={recommendation.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
