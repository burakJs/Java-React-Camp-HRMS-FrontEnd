import axios from "axios";

export default class PortfolioService {
  getAll() {
    return axios.get("http://localhost:8080/api/portfolios/getAll");
  }

  add(
    educationId,
    experienceId,
    imageUrl,
    intro,
    jobSeekerId,
    languageId,
    skillId
  ) {
    return axios.post("http://localhost:8080/api/portfolios/add", {
      educationId: educationId,
      experienceId: experienceId,
      imageUrl: imageUrl,
      intro: intro,
      jobSeekerId: jobSeekerId,
      languageId: languageId,
      skillId: skillId,
    });
  }

  //https://www.nicesnippets.com/blog/react-js-file-upload-example-with-axios#:~:text=In%20react%20upload%20image%20with,set%20file%20object%20in%20state.
  setImage(portfolioId, imageFormData) {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return axios.post(
      "http://localhost:8080/api/portfolios/setImage?id=" + portfolioId,
      imageFormData
      // config
    );
  }
}
