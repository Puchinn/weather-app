function search(searchObject) {
  return {
    id: searchObject.id,
    city: searchObject.name,
    region: searchObject.region,
    country: searchObject.country,
  };
}

export { search };
