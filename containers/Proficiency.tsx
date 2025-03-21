import React from "react";
import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";
import { Fade } from "react-awesome-reveal";
import GreetingLottie from "../components/DisplayLottie";

const Proficiency = () => {
  return (
    SkillBars && (
      <Container className="section section-lg" >
        <Fade direction="up" duration={1200} triggerOnce>
          <Row>
            <Col lg="6">
              <h1 className="h1">Proficiences</h1>
              {SkillBars.map(skill => {
                return (
                  <div className="progress-info" key={skill.Stack}>
                    <div className="progress-label">
                      <span>{skill.Stack}</span>
                    </div>
                    <div className="progress-percentage">
                      <span>{skill.progressPercentage}%</span>
                    </div>
                    <Progress
                      max="100"
                      value={skill.progressPercentage}
                      color="info"
                      role="progressbar"
                      aria-label={skill.Stack}
                    />
                  </div>
                );
              })}
            </Col>
          </Row>
        </Fade>
      </Container>
    )
  );
};

export default Proficiency;
