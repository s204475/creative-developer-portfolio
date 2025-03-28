import React from "react";
import { games } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import { Fade } from "react-awesome-reveal";

const Games = () => {
  return (
    games && (
      <Fade direction="up" duration={1200} triggerOnce>
        <section className="section section-lg">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-controller text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">Games</h4>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {games.map((data, i) => {
                return <ProjectsCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Games;
