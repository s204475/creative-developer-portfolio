import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import { Fade } from "react-awesome-reveal";
import { ProjectType } from "../types/sections";
import { useRouter } from "next/router";

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
  whitespace,
  longDesc, // Long description for project page
  images, // Images for project page
  imagesText, // Text for images in project page
  roleDescription, // Description of the role in the project
  experienceGained, // Experience gained from the project
}: ProjectType) => {
  const router = useRouter();
  if (longDesc === undefined || longDesc === null || longDesc === "" || longDesc === "undefined") {
    longDesc = desc; // Fallback to desc if longDesc is not provided
  }

  const handleClick = () => {
    const projectId = name.toLowerCase().replace(/\s+/g, "-");
    router.push({
      pathname: `/project/${projectId}`,
      query: {
        name,
        longDesc,
        role,
        images,
        imagesText,
        roleDescription,
        link,
        link2,
        github,
        newWindow,
        buttonText,
        buttonText2,
      }, // minimal query params TODO: Move queries to the project page
    });
  };

  return (
    <Col lg="6">
      <Card className="shadow-lg--hover shadow mt-4" onClick={handleClick} style={{ cursor: "pointer" }}>
        <CardBody className="h-100">
          <div className="d-flex px-3">
            <div className="pl-4">
              {whitespace
                ? // Show lines of whitespace depending on the whitespace prop
                  Array.from({ length: whitespace }, (_, i) => <div key={i} style={{ height: "1rem" }} />)
                : null}
              <h3>{name}</h3>
              <p className="description mt-3">{desc}</p>
              <p className="description mt-4">{experienceGained ? "Tags: " + experienceGained.join(", ") : ""}</p>
              {github ? (
                <Button
                  className="btn-icon"
                  color="github"
                  href={github}
                  target="_blank"
                  rel="noopener"
                  aria-label="Github"
                  onClick={e => e.stopPropagation()}
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
                  target={newWindow ? "_blank" : "_self"}
                  rel="noopener"
                  aria-label="Twitter"
                  onClick={e => e.stopPropagation()}
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
                  onClick={e => e.stopPropagation()}
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-arrow-right mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1">{buttonText2}</span>
                </Button>
              ) : null}
              {role ? (
                <p className="description mt-1" style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                  Role: {role}
                </p>
              ) : null}
              {whitespace
                ? // Show lines of whitespace depending on the whitespace prop
                  Array.from({ length: whitespace }, (_, i) => <div key={i} style={{ height: "1rem" }} />)
                : null}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsCard;
