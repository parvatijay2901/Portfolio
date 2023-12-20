import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiFillGoogleCircle } from "react-icons/ai";

function GoogleScholar(props) {
  const GoogleScholarProfileLink = "https://scholar.google.com/citations?user=VwpVI44AAAAJ&hl=en";

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
          href={GoogleScholarProfileLink} 
          target="_blank" 
          style={customStyle}
        >
          <AiFillGoogleCircle /> &nbsp; View on my Google Scholar profile
        </Button>
      </Card.Body>
    </Card>
  );
}

export default GoogleScholar;
