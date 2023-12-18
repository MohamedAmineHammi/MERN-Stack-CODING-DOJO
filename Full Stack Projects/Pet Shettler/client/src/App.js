
import './App.css';
import Main from './Views/Main';
import { Routes, Route } from "react-router-dom"
import Update from './Views/Update';
import { Details } from './Views/Details';
import { Form } from './components/Form';
import NAvv from './components/NAvv';

function App() {
  return (
    <div className="App">
      
        <NAvv />
   
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/onepet/:pet_id" element={<Details />} />
        <Route path="/update/:pet_id" element={<Update />} />
        <Route path='/Form' element={<Form />} />
      </Routes>

    </div>
  );
}

export default App;
