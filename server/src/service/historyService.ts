import fs from "node:fs/promises";

// HistoryService class
class HistoryService {
  async getCities() {
    const cities = await fs.readFile("db/db.json", "utf8");
    const parsedCities = JSON.parse(cities);
    return parsedCities;
  }
  // addCity method that adds a city to the searchHistory.json file
  async addCity(city: string) {
    const data = await fs.readFile("db/db.json", "utf8");
    const cities = JSON.parse(data);

    if (cities.includes(city)) {
      console.log("City is already in your history.");
    } else {
      cities.push(city);
      fs.writeFile("db/db.json", JSON.stringify(cities, null, 2));
      console.log(`${city} has been added to your history.`);
    }
  }
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
}

export default new HistoryService();
