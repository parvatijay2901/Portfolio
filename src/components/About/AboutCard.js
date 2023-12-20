import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am currently a Data Science graduate student at the <span className="purple">University of Washington</span>. 
            Proficient in Python, MATLAB, SQL, and various technologies, I specialize in <span className="purple">Data Analysis, Signal Processing, and Natural Language Processing. </span>
            previously, As a Clinical Data Analyst at MiiCare UK, I managed NLP projects, led the design of the 'MiiVoice' MVP for mental health analysis, and researched Acoustic Gait Analysis.  
            As a Microsoft Azure Machine Learning Scholar, I completed Udacity’s Phase 2 nanodegree with projects on Azure SDK. 
            I hold a <span className="purple">B.Tech. degree in Electronics and Communication</span>, receiving Institute and Department Gold Medals. 
            My projects showcase expertise in Acoustic Signal Processing, Data Analytics, and Basic Computer Vision. 
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
