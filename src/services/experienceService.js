export default class ExperienceService {
  getAll() {
    return axios.get("http://localhost:8080/api/experiences/getAll");
  }

  add(entryDate, jobPosId, portfolioId, quitDate, workPlaceName) {
    return axios.post("http://localhost:8080/api/experiences/add", {
      entryDate: entryDate,
      jobPosition: {
        id: jobPosId,
      },
      portfolioId: portfolioId,
      quitDate: quitDate,
      workPlaceName: workPlaceName,
    });
  }
}
