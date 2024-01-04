function location(jsonData) {
  return {
    city: jsonData.location.name,
    region: jsonData.location.region,
    country: jsonData.location.country,
  };
}

export { location };
