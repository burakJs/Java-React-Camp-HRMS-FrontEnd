export default class EmployerService {
  getAll() {
    return axios.get("http://localhost:8080/api/employers/getAll");
  }

  add(email, password, companyName, phoneNumber, webSite) {
    return axios.post("http://localhost:8080/api/employers/add", {
      email: email,
      password: password,
      companyName: companyName,
      phoneNumber: phoneNumber,
      webSite: webSite,
    });
  }
}
