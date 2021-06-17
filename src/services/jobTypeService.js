import axios from "axios";

export default class JobTypeService {
  getAll() {
    return axios.get("http://localhost:8080/api/jobTypes/getAll");
  }

  add(name) {
    return axios.post("http://localhost:8080/api/jobTypes/add", {
      jobTypeName: name,
    });
  }
}
