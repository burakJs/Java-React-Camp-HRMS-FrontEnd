import axios from "axios";

export default class JobAdService {
  getJobAds() {
    return axios.get("http://localhost:8080/api/jobAds/getByIsActive");
  }

  getJobAdById(jobAdId) {
    return axios.get("http://localhost:8080/api/jobAds/getById?id=" + jobAdId);
  }

  findBySalaryMaxLessThanEqual(maxSalary) {
    return axios.get(
      "http://localhost:8080/api/jobAds/findBySalaryMaxLessThanEqual?maxSalary=" +
        maxSalary
    );
  }
  findBySalaryMinGreaterThanEqual(minSalary) {
    return axios.get(
      "http://localhost:8080/api/jobAds/findBySalaryMinGreaterThanEqual?minSalary=" +
        minSalary
    );
  }

  findBySalaryMinGreaterThanEqualAndSalaryMaxLessThanEqual(
    maxSalary,
    minSalary
  ) {
    return axios.get(
      "http://localhost:8080/api/jobAds/findBySalaryMinGreaterThanEqualAndSalaryMaxLessThanEqual?maxSalary=" +
        maxSalary +
        "&minSalary=" +
        minSalary
    );
  }

  getAllSortedByDate(sortType) {
    return axios.get(
      "http://localhost:8080/api/jobAds/getAllSortedByDate?sortType=" + sortType
    );
  }

  getByCityId(cityId) {
    return axios.get(
      "http://localhost:8080/api/jobAds/getByCityId?cityId=" + cityId
    );
  }

  getByCompanyName(companyName) {
    return axios.get(
      "http://localhost:8080/api/jobAds/getByIsActiveAndCompanyName?companyName=" +
        companyName
    );
  }

  getByJobPosId(jobPosId) {
    return axios.get(
      "http://localhost:8080/api/jobAds/getByJobPosId?jobPosId=" + jobPosId
    );
  }

  add(
    cityId,
    companyName,
    count,
    lastDate,
    description,
    jobPosId,
    salaryMax,
    salaryMin
  ) {
    return axios.post("http://localhost:8080/api/jobAds/add", {
      city: {
        id: cityId,
      },
      companyName: companyName,
      count: count,
      createdDate: new Date().toISOString().slice(0, 10),
      lastDate: lastDate,
      description: description,
      jobPosition: {
        id: jobPosId,
      },
      salaryMax: salaryMax,
      salaryMin: salaryMin,
    });
  }
}
