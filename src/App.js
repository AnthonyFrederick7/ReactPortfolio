import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';
import { HomePage } from './pages';

function App() {

  return (
      <div style={{ backgroundImage: "linear-gradient(to right, #18503c 0%, #1d2e4e 100%)" }}>
        <HomePage />
      </div>
  );
}

export default App;