// getRecommendations.js

const getMatchingProducts = (
  products,
  selectedFeatures,
  selectedPreferences
) => {
  const matchingProducts = products.filter((product) => {
    const hasFeatureMatch = product.features.some((feature) =>
      selectedFeatures.includes(feature)
    );
    const hasPreferenceMatch = product.preferences.some((preference) =>
      selectedPreferences.includes(preference)
    );

    return hasFeatureMatch || hasPreferenceMatch;
  });

  return matchingProducts;
};

const getTopProduct = (products, selectedFeatures, selectedPreferences) => {
  const rankedProducts = products.map((product) => {
    const featureMatches = product.features.filter((feature) =>
      selectedFeatures.includes(feature)
    ).length;

    const preferenceMatches = product.preferences.filter((preference) =>
      selectedPreferences.includes(preference)
    ).length;

    return {
      ...product,
      matches: featureMatches + preferenceMatches,
    };
  });

  let topProduct;

  for (const product of rankedProducts) {
    if (!topProduct || product.matches >= topProduct.matches) {
      topProduct = product;
    }
  }

  return [topProduct];
};

const hasNoData = (selectedPreferences, selectedFeatures, products) => {
  return (
    (selectedPreferences.length === 0 && selectedFeatures.length === 0) ||
    !products ||
    products.length === 0
  );
};

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products
) => {
  const { selectedPreferences, selectedFeatures, selectedRecommendationType } =
    formData;

  if (hasNoData(selectedPreferences, selectedFeatures, products)) return [];

  if (selectedRecommendationType === 'SingleProduct') {
    const topRecommendedProduct = getTopProduct(
      products,
      selectedFeatures,
      selectedPreferences
    );

    return topRecommendedProduct;
  } else {
    const recommendedProducts = getMatchingProducts(
      products,
      selectedFeatures,
      selectedPreferences
    );

    return recommendedProducts;
  }
};

export default { getRecommendations };
