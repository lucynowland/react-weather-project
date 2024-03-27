import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <h1 className="header">React Weather App</h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/lucynowland"
            target="_blank"
            rel="noreferrer"
          >
            Lucy Nowland
          </a>{" "}
          which is open-sourced on{" "}
          <a
            href="https://github.com/lucynowland/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://weather-application-react-project.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
