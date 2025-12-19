import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { type Season } from './SeasonEffect';
import './App.css';
import { Projects } from './pages/Projects/Projects';
import { Plans } from './pages/Plans/Plans';
import SeasonEffect from './SeasonEffect';

const Home = () => <div className="page"><h1>Home Page</h1><p>Welcome to my site.</p></div>;

function App() {
  const [isSnowing, setIsSnowing] = useState<boolean>(false);
  const [season, _] = useState<Season>('winter');

  const toggleSnow = () => {
    setIsSnowing(prev => !prev);
  };

  return (
    <Router>
      <div className="app-container">
        <SeasonEffect isVisible={isSnowing} type={season} />

        <nav className="nav">
          <div className="links">
            <Link to="/projects">Projects</Link>
            <Link to="/plans">Plans</Link>
          </div>
          
          <button className="snow_btn" onClick={toggleSnow}>
            <svg className='snow_btn__svg' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3V21M16 4L12 8L8.00878 4M8.00878 20L12 16L16 20M3 12H21M4 8L8.00878 12L4 16M20 16L16 12L20 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/plans" element={<Plans />} />
          </Routes>
        </main>

        <footer className="footer">
          dear me
        </footer>
      </div>
    </Router>
  );
}

export default App;