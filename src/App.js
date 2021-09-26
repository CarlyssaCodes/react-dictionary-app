import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header" />
        <main>
          <h1>Dictionary App</h1>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <a href="https://github.com/CarlyssaCodes/react-weather-app">
            Open-source
          </a>{" "}
          coded by Carlyssa Pierre
        </footer>
      </div>
    </div>
  );
}
