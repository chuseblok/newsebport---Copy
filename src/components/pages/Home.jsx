import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ProfilePic from "../Images/seb2.jpg";
import redRock from "../Images/RedRockz.jpg";
import petiteJeans from "../Images/PetiteJeans.jpg";
import nH from "../Images/NH.jpg";
const Project = () => {
  return (
    <div class='C1'>
      <div class='C11stChild'>
        <title class='titlesphome'> Sebastian's Portfolio</title>
      </div>
      <div class='C12ndChild'>
        <div class='cardsp'>
          <div class='sphome'>About Me</div>
          <h1 class='homewordbubble'>
            I am a self-taught professional with over 15 years of digital design
            experience with Adobe Photoshop. Enhanced CSS and JSX skills through
            recent software development bootcamp. Quick, proficient, and
            innovative UX/UI designer ready to design experiences
            (products/services) for clients and/or customers.{" "}
          </h1>
          <div class='BP'></div>
        </div>
        <div class='cardsp'>
          <div class='sphome2'></div>
          <Router>
            <div class='spImg1Home'>
              <img src={ProfilePic} alt='example' />
            </div>
          </Router>
          <div class='BP'>
            <Router>
              <div class='spImg2Home'>
                <img src={redRock} alt='example' />
              </div>
            </Router>
          </div>
        </div>
        <div class='cardsp'>
          <div class='sphome2'></div>
          <Router>
            <div class='spImg3Home'>
              <img src={petiteJeans} alt='example' />
            </div>
          </Router>
          <div class='BP'>
            <h2 class='homewordbubble'>
              My Skills
              <div class='HB'>
                <h3>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>React.JSX</li>
                  <li>Javascript</li>
                  <li>jQuery</li>
                </h3>
                <h4>
                  <li>Boostrap</li>
                  <li>Python</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <li>Figma</li>
                </h4>
              </div>
            </h2>
          </div>
        </div>
        <div class='cardsp'>
          <div class='sphome2'></div>
          <h3 class='homewordbubble'>Contact: sebastian.chunley@gmail.com</h3>
          <div class='BP'>
            <Router>
              <div class='spImg4Home'>
                <img src={nH} alt='example' />
              </div>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
