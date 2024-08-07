import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary defaultkeyword="sunset" />
      </main>
      <footer className="App-footer">
 <small>This project was coded by Elizabeth Lavender and  is open-sourced on &nbsp;
<a 
href="https://github.com/Lizernz/react-dictionary-project"
target="_blank" rel="noreferrer">Github </a> and on &nbsp;

<a href="https://lizernz-dictionary-project.netlify.app/"
target="_blank" rel="noreferrer">Netlify</a></small>
      </footer>
    </div>
    </div>
  );
}

export default App;


