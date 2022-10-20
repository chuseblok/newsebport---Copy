import "./App.css";
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div class='port'>
          <PortfolioContainer />
        </div>
      </header>
      <footer>
        <a
          class='linkedln'
          href='https://www.linkedin.com/in/sebastian-chunley-856760141/'
        >
          {/* Linkedln */}
        </a>

        <a
          class='instagram'
          href='https://www.instagram.com/sebastianchumley_chuseblok/'
        >
          {/* Instagram */}
        </a>
        <a class='github' href='https://github.com/chuseblok'>
          {/* Github */}
        </a>
      </footer>
    </div>
  );
}

export default App;
