function StyledRecommendation({ name }) {
  const productBackground = (name) => {
    switch (name) {
      case 'RD Station CRM':
        return 'bg-slate-600';
      case 'RD Station Marketing':
        return 'bg-orange-600';
      case 'RD Conversas':
        return 'bg-emerald-600';
      case 'RD Mentor AI':
        return 'bg-rose-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div
      className={`mb-4 py-5 text-2xl font-bold text-center text-white ${productBackground(
        name
      )}`}
    >
      {name}
    </div>
  );
}

export default StyledRecommendation;
