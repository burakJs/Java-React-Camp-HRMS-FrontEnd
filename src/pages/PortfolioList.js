import React, { useEffect, useState } from "react";
import { Button, Card, Header, Icon, Image, Label } from "semantic-ui-react";
import PortfolioService from "../services/portfolioService";

export default function PortfolioList() {
  const portfolioService = new PortfolioService();
  const defaultImage =
    "https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg";
  const [portfolioList, setPortfolioList] = useState([]);
  const levelColor = ["red", "orange", "yellow", "olive", "green"];
  const [SPACES, setSPACES] = useState(0);

  useEffect(() => {
    portfolioService
      .getAll()
      .then((result) => setPortfolioList(result.data.data));
  }, []);

  const fillSpace = (languageName) => {
    let fill = "";
    for (let i = 0; i < SPACES - languageName.length; i++) {
      fill += "\xa0";
    }
    console.log(SPACES);
    return fill;
  };
  return (
    <div>
      <Card.Group>
        {portfolioList.map((portfolio) => (
          <Card link style={{ marginTop: 2 + "em" }} fluid key={portfolio.id}>
            <Card.Content textAlign="left">
              <Image
                floated="right"
                size="huge"
                avatar
                src={
                  portfolio.imageUrl.includes("http")
                    ? portfolio.imageUrl
                    : defaultImage
                }
              ></Image>
              <Card.Header>Burak Imdat</Card.Header>
              <Card.Meta>Mobile Developer</Card.Meta>
              <Card.Description style={{ marginBottom: 2 + "em" }}>
                {portfolio.intro}
              </Card.Description>

              <Card style={{ padding: 1 + "em" }} fluid>
                <Card.Description>
                  <Header as="h3">Eğitim</Header>

                  {portfolio.educations.length === 0 ? (
                    <Label style={{ marginBottom: 2 + "em" }}>
                      Eğitim Bulunmamaktadır
                    </Label>
                  ) : (
                    portfolio.educations.map((education) => (
                      <Card.Content textAlign="left" key={education.id}>
                        <br />
                        <Card.Header>
                          <Header as="h4">{education.schoolName}</Header>
                        </Card.Header>
                        <Card.Meta>{education.departmentName}</Card.Meta>
                        <Card.Description>
                          <Icon name="calendar alternate" />
                          {education.entryDate}
                        </Card.Description>
                        <Card.Description style={{ marginBottom: 2 + "em" }}>
                          <Icon name="graduation" />
                          {education.graduationDate}
                        </Card.Description>
                      </Card.Content>
                    ))
                  )}
                </Card.Description>
              </Card>

              <Card style={{ padding: 1 + "em" }} fluid>
                <Card.Description>
                  <Header as="h3">Deneyimler</Header>
                  {portfolio.experiences.length === 0 ? (
                    <Label style={{ marginBottom: 2 + "em" }}>
                      Deneyim Bulunmamaktadır
                    </Label>
                  ) : (
                    portfolio.experiences.map((experience) => (
                      <Card.Content textAlign="left" key={experience.id}>
                        <br />
                        <Card.Header>
                          <Header as="h4">{experience.workPlaceName}</Header>
                        </Card.Header>
                        <Card.Meta>
                          {experience.jobPosition.jobPositionName}
                        </Card.Meta>
                        <Card.Description>
                          <Icon name="calendar alternate" />
                          {experience.entryDate}
                        </Card.Description>
                        <Card.Description style={{ marginBottom: 2 + "em" }}>
                          <Icon name="calendar times" />
                          {experience.quitDate}
                        </Card.Description>
                      </Card.Content>
                    ))
                  )}
                </Card.Description>
              </Card>

              <Card style={{ padding: 1 + "em" }} fluid>
                <Card.Description>
                  <Header as="h3">Bildiği Diller</Header>
                  {portfolio.languages.length === 0 ? (
                    <Label style={{ marginBottom: 2 + "em" }}>
                      Dil Bulunmamaktadır
                    </Label>
                  ) : (
                    portfolio.languages.map((language) => (
                      <Card.Content textAlign="left" key={language.id}>
                        {language.languageName.length > SPACES
                          ? setSPACES(language.languageName.length + 8)
                          : null}
                        <br />
                        <Card.Header>
                          <Header as="h4">
                            {language.languageName}
                            {fillSpace(language.languageName)}
                            {levelColor
                              .slice(0, Number(language.languageLevel))
                              .map((color) => (
                                <Label
                                  circular
                                  color={color}
                                  empty
                                  key={color}
                                />
                              ))}
                          </Header>
                        </Card.Header>
                      </Card.Content>
                    ))
                  )}
                </Card.Description>
              </Card>

              <Card style={{ padding: 1 + "em" }} fluid>
                <Card.Description>
                  <Header as="h3">Yetenekler</Header>
                  {portfolio.skills.length === 0 ? (
                    <Label style={{ marginBottom: 2 + "em" }}>
                      Yetenek Bulunmamaktadır
                    </Label>
                  ) : (
                    portfolio.skills.map((skill) => (
                      <Card.Content textAlign="left" key={skill.id}>
                        <br />
                        <Card.Header>
                          <Header as="h4">
                            <Icon name="star" />
                            {skill.skillName}
                          </Header>
                        </Card.Header>
                      </Card.Content>
                    ))
                  )}
                </Card.Description>
              </Card>
            </Card.Content>
            <Button color="black">Düzenle</Button>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
