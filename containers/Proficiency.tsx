import React from "react";
import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";
import { Fade } from "react-awesome-reveal";
import GreetingLottie from "../components/DisplayLottie";
import DisplayLottie from "../components/DisplayLottie";

const Proficiency = () => {
  return (
    SkillBars && (
      <Container className="section section-lg">
        <Fade direction="up" duration={1200} triggerOnce>
          <Row>
            <Col lg="6">
              <h1 className="h1">Proficiencies</h1>
              {SkillBars.map(skill => {
                return (
                  <div className="progress-info" key={skill.Stack}>
                    <div className="progress-label">
                      <span>{skill.Stack}</span>
                    </div>
                    <div className="progress-percentage">
                      <span>{skill.description}</span>
                    </div>
                    <Progress
                      max="100"
                      value={skill.progressPercentage}
                      color="warning"
                      role="progressbar"
                      aria-label={skill.Stack}
                    />
                  </div>
                );
              })}
            </Col>
            <Col lg="6" className="d-flex justify-content-center align-items-center">
              <DisplayLottie animationPath={"/lottie/skills/Proficiency.json"} />
            </Col>
          </Row>
        </Fade>
      </Container>
    )
  );
};

export default Proficiency;
