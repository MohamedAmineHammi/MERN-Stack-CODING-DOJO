import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Main from './Views/Main';

import './App.css';
import Update from './Views/Update';
import { Details } from './Views/Details';
import { Forme } from './components/Forme';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/movies" element={<Main/>} />
        <Route path="/onePirate/:Pirate_id" element={<Details />} />
        <Route path="/update/:Pirate_id" element={<Update />} />
        <Route path='/Form' element={<Forme/>} />
      </Routes>
    </div>
  );
}

export default App;
