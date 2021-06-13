export default class SkillService {
  getAll() {
    return axios.get("http://localhost:8080/api/skills/getall");
  }

  add(name, portfolioId) {
    return axios.post("http://localhost:8080/api/skills/add", {
      skillName: name,
      portfolioId: portfolioId,
    });
  }
}
