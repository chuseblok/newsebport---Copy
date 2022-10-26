import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import granDma from "../Images/grandma.jpg";
import knowTeacher from "../Images/teacher.jpg";
import eventPlan from "../Images/event.jpg";
import waterMelon from "../Images/watermelon.jpg";
import sebPort from "../Images/SBP.jpg";
const Project = () => {
  return (
    <div class='C2'>
      <div class='card'>
        <div class='titlegcb'>Grandma's CookBook</div>
        <div class='gcb'>
          <Router>
            <div>
              <a
                href='https://wmskillas.github.io/Grandmas-Cook-Book/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={granDma} alt='example' />
              </a>
            </div>
          </Router>
        </div>
        <h1 class='wordbubble'>
          Co-built a MERN stack application where users create an account to
          upload, edit, comment, like, and share recipes. Recipes are
          categorized by breakfast, lunch, and dinner. This application was
          developed with:{" "}
          <div class='h23'>
            <h2>
              <li>MongoDB</li> <li>Express.js</li> <li>React.js</li>
            </h2>{" "}
            <h3>
              <li>Node.js</li> <li>CSS</li>
            </h3>
          </div>
        </h1>
        <div class='BP'>
          {/* <a
            class='buttongcb'
            href='https://github.com/wmskillas/Grandmas-Cook-Book'
          >
            Github
          </a> */}
        </div>
      </div>
      <div class='card'>
        <div class='titlekyt'>Know Your Teacher</div>
        <div class='kyt'>
          {" "}
          <Router>
            <div>
              <a
                href='https://knowyourteacher.herokuapp.com/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={knowTeacher} alt='example' />
              </a>
            </div>
          </Router>
        </div>
        <h1 class='wordbubble'>
          Co-built an application for teachers to share a list of gift ideas
          with students and parents during Teacher Appreciation Week. The Know
          Your Teacher app provides a platform for teachers to communicate their
          favorite items and make gift giving for students and parents. This
          application was developed with:{" "}
          <div class='h23'>
            <h2>
              <li>Mysql</li>
              <li>Node.js</li>
              <li>Javascript</li>
            </h2>
            <h3>
              <li>Bootstrap</li>
              <li>Handlebars</li>
            </h3>
          </div>
        </h1>
        <div class='BP'>
          {/* <a
            class='buttonkyt'
            href='https://github.com/choilina16/know-your-teacher'
          >
            Github
          </a> */}
        </div>
      </div>
      <div class='card'>
        <div class='titleEp'>EventPlan</div>
        <div class='ep'>
          <Router>
            <div>
              <a
                href='https://jdmill.github.io/Eventplan/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={eventPlan} alt='example' />
              </a>
            </div>
          </Router>
        </div>
        <h1 class='wordbubble'>
          Co-built a musical festival event application for users to track event
          location, date and time, and weather forcast. This application
          supports users with tools to efficiently plan for upcoming events.
          This application was developed with:
          <div class='h23'>
            <h2>
              <li>Javascript</li>
              <li>HTML</li>
              <li>Bootstrap</li>
              <li>JQuery</li>
            </h2>
            <h3>
              <li>Ticketmaster APIs</li>
              <li>Moments.js</li>
              <li>Open Weather APIs</li>
            </h3>
          </div>
        </h1>
        <div class='BP'>
          {/* <a class='buttonep' href='https://github.com/jdmill/Eventplan'>
            Github
          </a> */}
        </div>
      </div>
      <div class='card'>
        <div class='titlewm'>Watermelon</div>
        <div class='wm'>
          <Router>
            <div>
              <a
                href='https://watermelonz.herokuapp.com/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={waterMelon} alt='example' />
              </a>
            </div>
          </Router>
        </div>
        <h1 class='wordbubble'>
          I developed this application to resemble a watermelon, imaging was not
          used during this process. Hovering over the watermelon will results in
          a watermelon slice appearing. This application is deployed with Heroku
          and was developed with:
          <div class='h23'>
            <h2>
              <li>React.js</li>
            </h2>
            <h3>
              <li>CSS</li>
            </h3>
          </div>
        </h1>

        <div class='BP'>
          {/* <a class='buttonwm' href='https://github.com/chuseblok/Buttons'>
            Github
          </a> */}
        </div>
      </div>
      <div class='card'>
        <div class='titlesp'>Sebastian's Portfolio</div>
        <div class='sp'>
          <Router>
            <div>
              <a
                href='https://sebastianchunleyportfolio.vercel.app/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={sebPort} alt='example' />
              </a>
            </div>
          </Router>
        </div>
        <h1 class='wordbubble'>
          I developed this website to showcase my range of skills in UX/UI and
          front-end web development. It includes a description of my expertise
          and creativity. This application is deployed with Vercel and was
          developed with:
          <div class='h23'>
            <h2>
              <li>React.js</li>
            </h2>
            <h3>
              <li>CSS</li>
            </h3>
          </div>
        </h1>

        <div class='BP'>
          {/* <a class='buttonwm' href='https://github.com/chuseblok/Buttons'>
            Github
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Project;
