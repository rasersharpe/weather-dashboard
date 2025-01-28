import { Router } from "express";
// import fs from "node:fs/promises";
const router = Router();

import HistoryService from "../../service/historyService.js";
import WeatherService from "../../service/weatherService.js";
// import historyService from "../../service/historyService.js";

// TODO: POST Request with city name to retrieve weather data
router.post("/", (req, res) => {
  // TODO: GET weather data from city name
  console.log(req.body.cityName);
  WeatherService.getForecast(req.body.cityName).then((data: any) => {
    console.log(data);
    res.json(data);
  });
  // res.json(forecast);
  // TODO: save city to search history
  // fs.appendFile("../../../db/db.json", req.body.cityName);
});

// TODO: GET search history
router.get("/history", async (_req, res) => {
  HistoryService.getCities().then((data) => {
    console.log(data);
    res.json(data);
  });
});

// * BONUS TODO: DELETE city from search history
router.delete("/history/:id", async (_req, _res) => {});

export default router;
