import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header" />
        <main>
          <h1>Dictionary</h1>
          <Dictionary defaultKeyword="determination" />
        </main>
        <footer className="App-footer">
          <small>
            <a href="https://github.com/CarlyssaCodes/react-weather-app">
              Open-source
            </a>{" "}
            coded by Carlyssa Pierre. Photos provided by{" "}
            <a href="https://www.pexels.com">Pexels</a> and hosted on{" "}
            <a href="https://www.netlify.com">Netlifly</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
