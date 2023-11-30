
import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import GetAll from './components//GetAll'
import Delete from './components/Delete';
import Create from './views/Create'
import GetOne from './components/GetOne';
import UpDate from './components/UpDate';




function App() {
  return (
    <div className="App">
      <div>
        <p><Link to={"/players/liste"} >Manage players</Link> </p>
        <p>|</p>
        <p><Link to ={""}> Manage Player state</Link></p>
        <hr/>
      </div>
      <div>

        <h1> welcome in manager players</h1>
      <Routes>
          <Route path="players/liste" element={<GetAll />}/> 
          <Route path="/players/new" element={<Create />}/> 
          <Route path="/delete/:_id" element={<Delete />}/>
          <Route path="/update/:_id" element={<UpDate />}/> 
          <Route path="/player/:_id" element={<GetOne />}/>

      </Routes>

      </div>

      
    </div>
  );
}

export default App;
