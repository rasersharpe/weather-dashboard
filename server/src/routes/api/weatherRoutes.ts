import { Router } from "express";
const router = Router();

import HistoryService from "../../service/historyService.js";
import WeatherService from "../../service/weatherService.js";

// POST Request with city name to retrieve weather data
router.post("/", (req, res) => {
  // GET weather data from city name
  console.log(req.body.cityName);
  WeatherService.getForecast(req.body.cityName).then((data: any) => {
    console.log(data);
    // This is where you can call the method to add the city. Off of historyService.
    HistoryService.addCity(req.body.cityName);
    res.json(data);
  });
});

// GET search history
router.get("/history", async (_req, res) => {
  HistoryService.getCities().then((data) => {
    console.log(data);
    res.json(data);
  });
});

// * BONUS TODO: DELETE city from search history
router.delete("/history/:id", async (_req, _res) => {});

export default router;
