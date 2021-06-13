export default class JobSeekerService {
  getAll() {
    return axios.get("http://localhost:8080/api/jobSeekers/getAll");
  }

  add(email, password, birthday, identityNumber, name, surname) {
    return axios.post("http://localhost:8080/api/jobSeekers/add", {
      email: email,
      password: password,
      birthday: birthday,
      identityNumber: identityNumber,
      name: name,
      surname: surname,
    });
  }
}
