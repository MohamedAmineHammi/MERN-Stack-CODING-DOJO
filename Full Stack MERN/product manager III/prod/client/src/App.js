import "./App.css";
import { Details } from "./Views/Details";
import Main from "./Views/Main";
import Update from "./Views/Update";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <fieldset>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/oneProduct/:product_id" element={<Details />} />

          <Route path="/update/:product_id" element={<Update />} />
        </Routes>
      </fieldset>
    </div>
  );
}

export default App;
