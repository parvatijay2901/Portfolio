import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I recently graduated from the Data Science Graduate program at the <span className="purple">University of Washington</span>, worked part-time at the <span className="purple">UW eScience Institute</span> and interned at <span className="purple">Pearson Packaging Systems</span> last summer. 
            Proficient in Python, MATLAB, SQL, and various technologies, I specialize in <span className="purple">Data Science, Data Analytics, Signal Processing, and Natural Language Processing. </span>
            As a Data Scientist (R&D) at MiiCare UK, I managed NLP projects, led the design of the 'MiiVoice' MVP for mental health analysis, and researched Acoustic Gait Analysis.
            I hold a <span className="purple">B.Tech. degree in Electronics and Communication</span>, receiving Institute and Department Gold Medals. 
            My projects showcase expertise in Data Science, Acoustic Signal Processing, Data Analytics, and Computer Vision. 
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
