import axios from "axios";

export default class CityService {
  getAll() {
    return axios.get("http://localhost:8080/api/city/getAll");
  }

  add(cityName, plateNumber) {
    return axios.post("http://localhost:8080/api/city/add", {
      cityName: cityName,
      plateNumber: plateNumber,
    });
  }

  deleteById(id) {
    return axios.post("http://localhost:8080/api/city/deleteById?id=" + id);
  }
}
