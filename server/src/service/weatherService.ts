// import dayjs, { type Dayjs } from "dayjs";
// import { type Dayjs } from "dayjs";
import dotenv from "dotenv";
dotenv.config();

// TODO: Define an interface for the Coordinates object
// interface Coordinates {
//   name: string;
//   lat: number;
//   lon: number;
//   country: string;
//   state: string;
// }

// TODO: Define a class for the Weather object
// class Weather {
//   city: string;
//   date: Dayjs | string;
//   tempF: number;
//   windSpeed: number;
//   humidity: number;
//   icon: string;
//   iconDescription: string;
//   constructor(
//     city: string,
//     date: Dayjs | string,
//     tempF: number,
//     windSpeed: number,
//     humidity: number,
//     icon: string,
//     iconDescription: string
//   ) {
//     this.city = city;
//     this.date = date;
//     this.tempF = tempF;
//     this.windSpeed = windSpeed;
//     this.humidity = humidity;
//     this.icon = icon;
//     this.iconDescription = iconDescription;
//   }
// }

// TODO: Complete the WeatherService class
class WeatherService {
  private baseURL?: string;

  private apiKey?: string;

  // private city = "";

  constructor() {
    this.baseURL = process.env.API_BASE_URL || "";

    this.apiKey = process.env.API_KEY || "";
  }
  // TODO: method to fetch weather based on city

  // TODO: method to fetch 5 day forecast based on lon and lat
  getForecast(cityName: string) {
    const url = `${this.baseURL}forecast?q=${cityName}&appid=${this.apiKey}`;
    console.log(url);
  }

  // TODO: method to build and return your array of weather objects
}

export default new WeatherService();
