import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';
import { HomePage } from './pages';

function App() {

  return (
      <div style={{ backgroundImage: "linear-gradient(to right, #18503c 0%, #1d2e4e 100%)" }}>
        <Router>
            <Routes>
              <Route path='/ReactPortfolio' element={<HomePage />}/>
            </Routes>
        </Router>
      </div>
  );
}

export default App;