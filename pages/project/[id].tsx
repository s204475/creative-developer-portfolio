import { useRouter } from "next/router";
import { Container } from "reactstrap";
import Head from "next/head";

const ProjectDetails = () => {
  const router = useRouter();
  const { id, name, longDesc, role, gif, images, roleDescription } = router.query;

  return (
    <Container className="mt-5">
      <Head>
        <title>{name} | Project Details</title>
      </Head>
      <h1>{name}</h1>
      <p>
        <strong>Role:</strong> {role}
        {roleDescription}
      </p>
      <p style={{ whiteSpace: "pre-wrap" }}>{longDesc}</p>
    </Container>
  );
};

export default ProjectDetails;
