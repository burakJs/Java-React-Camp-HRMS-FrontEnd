import axios from "axios";

export default class JobWorkingTimeService {
  getAll() {
    return axios.get("http://localhost:8080/api/jobWorkingTime/getAll");
  }

  add(name) {
    return axios.post("http://localhost:8080/api/jobWorkingTime/add", {
      jobWorkingTimeName: name,
    });
  }
}
