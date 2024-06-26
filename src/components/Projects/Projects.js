import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function Projects(props) {
  const githubLink = "https://github.com/parvatijay2901?tab=repositories";

  const customStyle = {
    marginTop: "300px",
    marginBottom: "300px",
  };

  return (
    <Card className="project-card-view">
      <Card.Body className="text-center">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Button 
          variant="primary" 
          href={githubLink} 
          target="_blank" 
          style={customStyle}
        >
          <BsGithub /> &nbsp; View on my GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Projects;
