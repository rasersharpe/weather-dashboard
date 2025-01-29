import { type Dayjs } from "dayjs";
import dotenv from "dotenv";
dotenv.config();

// Define a class for the Weather object
class Weather {
  city: string;
  date: Dayjs | string;
  tempF: number;
  windSpeed: number;
  humidity: number;
  icon: string;
  iconDescription: string;
  constructor(
    city: string,
    date: Dayjs | string,
    tempF: number,
    windSpeed: number,
    humidity: number,
    icon: string,
    iconDescription: string
  ) {
    this.city = city;
    this.date = date;
    this.tempF = tempF;
    this.windSpeed = windSpeed;
    this.humidity = humidity;
    this.icon = icon;
    this.iconDescription = iconDescription;
  }
}

// WeatherService class
class WeatherService {
  private baseURL?: string;

  private apiKey?: string;

  // private city = "";

  constructor() {
    this.baseURL = process.env.API_BASE_URL || "";

    this.apiKey = process.env.API_KEY || "";
  }
  // Method to fetch weather based on city

  async getForecast(cityName: string) {
    try {
      const url = `${this.baseURL}forecast?q=${cityName}&units=imperial&appid=${this.apiKey}`;
      console.log(url);
      const weatherData = await fetch(url).then((res) => res.json());
      const includedIndexes = [0, 4, 12, 20, 28, 36];
      const restructuredData = weatherData.list
        .filter((_element: any, index: number) =>
          includedIndexes.includes(index)
        )
        .map((element: any) => {
          return new Weather(
            weatherData.city.name,
            element.dt,
            element.main.temp,
            element.wind.speed,
            element.main.humidity,
            element.weather[0].icon,
            element.weather[0].description
          );
        });
      return restructuredData;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new WeatherService();
