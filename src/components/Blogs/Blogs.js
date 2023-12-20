import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsMedium } from "react-icons/bs";

function Projects(props) {
  const mediumLink = "https://parvatijay2901.medium.com/";
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
          href={mediumLink} 
          target="_blank" 
          style={customStyle}
        >
          <BsMedium /> &nbsp; Read on my Medium
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Projects;
