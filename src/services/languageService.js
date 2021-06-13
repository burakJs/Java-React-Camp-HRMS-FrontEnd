export default class LanguageService {
  getAll() {
    return axios.get("http://localhost:8080/api/languages/getall");
  }

  add(name, level, portfolioId) {
    return axios.post("http://localhost:8080/api/languages/add", {
      languageName: name,
      languageLevel: level,
      portfolioId: portfolioId,
    });
  }
}
