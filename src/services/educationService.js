export default class EducationService {
  getAll() {
    return axios.get("http://localhost:8080/api/educations/getAll");
  }

  add(departmentName, entryDate, graduationDate, portfolioId, schoolName) {
    return axios.post("http://localhost:8080/api/educations/add", {
      departmentName: departmentName,
      entryDate: entryDate,
      graduationDate: graduationDate,
      portfolioId: portfolioId,
      schoolName: schoolName,
    });
  }

  deleteById(id) {
    return axios.post(
      "http://localhost:8080/api/educations/deleteById?id=" + id
    );
  }
}
