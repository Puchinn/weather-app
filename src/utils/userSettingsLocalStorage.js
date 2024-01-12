const key = "weather-app-userSettings";

class UserSettingsLocalStorage {
  constructor() {
    const hasSettings = this.settings();
    console.log(hasSettings);
    if (!hasSettings) {
      localStorage.setItem(key, JSON.stringify({}));
    }
  }

  settings() {
    const userSettings = JSON.parse(localStorage.getItem(key));
    return userSettings;
  }

  setLocation(newLocation) {
    const userSettings = this.settings();
    userSettings.location = newLocation;
    localStorage.setItem(key, JSON.stringify(userSettings));
    return userSettings;
  }

  setSettings(settings) {
    const stringifySettings = JSON.stringify(settings);
    localStorage.setItem(key, stringifySettings);
  }
}

export default new UserSettingsLocalStorage();
