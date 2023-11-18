import "./App.css";
import Main from "./Views/Main";
import Update from "./Views/Update";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <fieldset>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/" element={<Update />} />
        </Routes>
      </fieldset>
    </div>
  );
}

export default App;
