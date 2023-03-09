import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';
import HomePage from './pages';

function App() {

  return (
    <Router>
      <div style={{ backgroundImage: "linear-gradient(to right, #18503c 0%, #1d2e4e 100%)" }}>
        <Routes>
          <Route path='/' element={<HomePage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;