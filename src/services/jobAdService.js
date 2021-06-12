import axios from "axios";

export default class JobAdService {
  getJobAds() {
    return axios.get("http://localhost:8080/api/jobAds/getByIsActive");
  }

  getJobAdById(jobAdId) {
    return axios.get("http://localhost:8080/api/jobAds/getById?id=" + jobAdId);
  }
}
