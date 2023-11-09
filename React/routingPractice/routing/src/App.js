import './App.css';
import Home from './components/Home';
import ParamsComponent from './components/ParamsComponent';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>
        {/* /home is a "hard path". There aren't params in the route. */}
        <Route element={<Home />} path="/home"/>
        {/* We have two potential routes/paths  for the ParamsComponent */}
        <Route element={<ParamsComponent />} path="/:word" />
        {/* These values (params) can be destructured from the useParam hook and used as variables, 
        just like values destructured from props! */}
        <Route element={<ParamsComponent />} path="/:word/:color/:bgCol" />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;