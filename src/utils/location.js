class Location {
  objectToString(locationObject = {}) {
    const location = `${locationObject.city}, ${locationObject.region} - ${locationObject.country}`;
    return location;
  }

  stringToObject(locationString = "") {
    const location = {
      city: locationString.split(",")[0],
      region: locationString.split(",")[1].split("-")[0],
      country: locationString.split("-")[1],
    };
    return location;
  }
}

export default new Location();
