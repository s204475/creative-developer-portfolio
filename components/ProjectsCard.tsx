import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import { Fade } from "react-awesome-reveal";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({
  name,
  desc,
  github,
  link,
  link2,
  buttonText,
  buttonText2,
  image,
  gif,
  youtube,
  newWindow,
  role,
}: ProjectType) => {
  return (
    <Col lg="6">
      <Card className="shadow-lg--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h3>{name}</h3>
              <p className="description mt-3">{desc}</p>
              {github ? (
                <Button
                  className="btn-icon"
                  color="github"
                  href={github}
                  target="_blank"
                  rel="noopener"
                  aria-label="Github"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
              ) : null}
              {gif ? (
                //Show gif
                <Fade direction="up" triggerOnce>
                  <img alt="..." className="img-fluid rounded shadow-lg" src={gif} />
                </Fade>
              ) : null}
              {link ? (
                <Button
                  className="btn-icon"
                  color="success"
                  href={link}
                  target = {newWindow ? "_blank" : "_self"}
                  rel="noopener"
                  aria-label="Twitter"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-arrow-right mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1">{buttonText}</span>
                </Button>
              ) : null}
              {link2 ? (
                <Button
                  className="btn-icon"
                  color="success"
                  href={link}
                  target="_blank"
                  rel="noopener"
                  aria-label="Twitter"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-arrow-right mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1">{buttonText2}</span>
                </Button>
              ) : null}
              {role ? (
                <p className="description mt-1" style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Role: {role}</p>
              ) : null}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsCard;
