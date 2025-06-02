import { useRouter } from "next/router";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import Head from "next/head";
import { Fade } from "react-awesome-reveal";

const ProjectDetails = () => {
  const router = useRouter();
  const {
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
  } = router.query;

  return (
    <>
      <Head>
        <title>{name} | Project Details</title>
      </Head>
      <section className="section section-lg bg-gradient-warning text-white">
        <Container>
          <Fade direction="up" duration={1000} triggerOnce>
            <Row className="justify-content-center text-center mb-5">
              <Col lg="8">
                <h1 className="display-3 font-weight-bold">{name}</h1>
                {roleDescription && (
                  <>
                    <p className="lead">
                      <strong>Role:</strong> {role}
                    </p>
                    <Card className="shadow-lg border-0 rounded-lg" style={{ whiteSpace: "pre-wrap" }}>
                      <CardBody>{roleDescription && <p className="text-white-80">{roleDescription}</p>}</CardBody>
                    </Card>
                  </>
                )}
              </Col>
            </Row>
          </Fade>

          <Fade direction="up" duration={1200} triggerOnce>
            <Row className="justify-content-center">
              <Col lg="10">
                <Card className="shadow-lg border-0 rounded-lg">
                  <CardBody>
                    <p className="text-dark" style={{ whiteSpace: "pre-wrap" }}>
                      {longDesc}
                    </p>
                    {images && Array.isArray(images) && (
                      <Row className="mt-4">
                        {images.map((img, index) => (
                          <Col md="4" className="mb-3" key={index}>
                            <img
                              src={img}
                              alt={`${imagesText ? imagesText[index] : ""}`}
                              className="img-fluid rounded shadow"
                            />
                          </Col>
                        ))}
                      </Row>
                    )}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Fade>
        </Container>
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>

        <Row className="justify-content-center mt-4">
          <Col lg="auto" className="d-flex justify-content-center">
            {github ? (
              <Button
                className="btn-icon mx-2"
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
            {link ? (
              <Button
                className="btn-icon mx-2"
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
                className="btn-icon mx-2"
                color="success"
                href={link2}
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
          </Col>
        </Row>
      </section>
    </>
  );
};

export default ProjectDetails;
