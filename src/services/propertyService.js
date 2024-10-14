// Function to filter properties based on various criteria
export const filterProperties = (properties, filters) => {
  const { type, location, bedrooms, bathrooms, priceMin, priceMax } = filters;

  return properties.filter((property) => {
    const matchesType = type === 'All' || property.type === type;
    const matchesLocation = location === '' || property.location.toLowerCase().includes(location.toLowerCase());
    const matchesBedrooms = bedrooms === '' || property.bedrooms === Number(bedrooms);
    const matchesBathrooms = bathrooms === '' || property.bathrooms === Number(bathrooms);
    const matchesPrice =
      (priceMin === '' || property.price >= Number(priceMin)) &&
      (priceMax === '' || property.price <= Number(priceMax));

    return matchesType && matchesLocation && matchesBedrooms && matchesBathrooms && matchesPrice;
  });
};
