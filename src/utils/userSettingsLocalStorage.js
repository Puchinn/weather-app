const key = "weather-app-userSettings";

class UserSettingsLocalStorage {
  settings() {
    const userSettings = JSON.parse(localStorage.getItem(key));
    return userSettings;
  }

  setLocation(newLocation) {
    const userSettings = this.settings();
    const newsSettings = {
      ...userSettings,
      location: newLocation,
    };
    localStorage.setItem(key, JSON.stringify(newsSettings));
    return newsSettings;
  }

  setSettings(settings) {
    const stringifySettings = JSON.stringify(settings);
    localStorage.setItem(key, stringifySettings);
  }
}

export default new UserSettingsLocalStorage();
