import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import MoviesHome from './components/MoviesHome';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/movies" element={<MoviesHome />} />
      </Routes>
    </div>
  );
}

export default App;
