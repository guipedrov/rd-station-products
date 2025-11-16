import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  const refreshRecommendations = (recommendations) => {
    if (recommendations) {
      setRecommendations(recommendations);
    } else {
      setRecommendations([]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-10 gap-10 mb-2 bg-[#f1f3f5] ">
      <h1 className="text-center text-3xl lg:text-4xl font-bold text-[#20acbe]">
        Recomendador de Produtos RD Station
      </h1>
      <div className="rounded-2xl shadow-md md:w-3/4 lg:min-w-1/2 lg:w-[60%] flex flex-col p-8 gap-4 bg-white">
        <div className="mb-4">
          <p className="text-md lg:text-lg leading-relaxed text-[#21536d]">
            Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode
            encontrar uma variedade de produtos da RD Station, cada um projetado
            para atender às necessidades específicas do seu negócio. De CRM a
            Marketing, de Conversas a Inteligência Artificial, temos uma solução
            para ajudar você a alcançar seus objetivos. Use o formulário abaixo
            para selecionar suas preferências e funcionalidades desejadas e
            receba recomendações personalizadas de produtos que melhor atendam
            às suas necessidades.
          </p>
        </div>
        <div className="w-[100%] grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-[100%]">
            <Form refreshRecommendations={refreshRecommendations} />
          </div>
          <div className="w-[100%]">
            <RecommendationList recommendations={recommendations} />
          </div>
        </div>
      </div>
      <img
        src="https://d3jj9yc7rgpax4.cloudfront.net/brand-system/logos/rd-station-default.svg"
        alt="RD Station"
        className="mt-2 h-9 opacity-20"
      ></img>
    </div>
  );
}

export default App;
