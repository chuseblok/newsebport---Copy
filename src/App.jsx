import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import PortfolioContainer from "./components/PortfolioContainer";
import gitHub from "./components/Images/GitHub.png";
import instaGram from "./components/Images/Instagram.png";
import linkEdin from "./components/Images/Linkedln.png";
function App() {
  return (
    <div className='App'>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      ></meta>
      <header className='App-header'>
        <div class='port'>
          <PortfolioContainer />
        </div>
      </header>
      <footer>
        <Router>
          <div>
            <a
              href='https://www.linkedin.com/in/sebastian-chunley-856760141/'
              target='_blank'
              rel='noreferrer'
            >
              <img class='linkedln' src={linkEdin} alt='LinkedIn' />
            </a>
          </div>
        </Router>

        <Router>
          <div>
            <a
              href='https://www.instagram.com/sebastianchumley_chuseblok/'
              target='_blank'
              rel='noreferrer'
            >
              <img class='instagram' src={instaGram} alt='Instagram' />
            </a>
          </div>
        </Router>

        <Router>
          <div>
            <a
              href='https://github.com/chuseblok'
              target='_blank'
              rel='noreferrer'
            >
              <img class='github' src={gitHub} alt='Github' />
            </a>
          </div>
        </Router>
        <div class='ft'></div>
      </footer>
    </div>
  );
}

export default App;
