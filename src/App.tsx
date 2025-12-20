import { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Projects } from './pages/Projects/Projects';
import { Plans } from './pages/Plans/Plans';
import SeasonEffect, { type Season } from './SeasonEffect';

const getCurrentSeason = (): Season => {
  const month = new Date().getMonth();
  if (month === 11 || month === 0 || month === 1) return 'winter';
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  return 'autumn';
};

const SeasonIcons = {
  winter: (
    <svg className='snow_btn__svg' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3V21M16 4L12 8L8.00878 4M8.00878 20L12 16L16 20M3 12H21M4 8L8.00878 12L4 16M20 16L16 12L20 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  ),
  spring: (
    <svg className='snow_btn__svg' version="1.1" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
    <g>
      <path d="M512,224.438c0-63.766-51.703-115.469-115.484-115.469c-8.781,0-17.328,1-25.531,2.859
        C365.656,52.984,316.219,6.875,256,6.875c-60.234,0-109.672,46.109-114.984,104.953c-8.219-1.859-16.766-2.859-25.531-2.859
        C51.703,108.969,0,160.672,0,224.438c0,47.594,28.797,88.469,69.906,106.141c-10.297,17.281-16.234,37.484-16.234,59.063
        c0,63.766,51.703,115.484,115.484,115.484c34.625,0,65.672-15.266,86.844-39.406c21.156,24.141,52.219,39.406,86.844,39.406
        c63.781,0,115.484-51.719,115.484-115.484c0-21.578-5.938-41.781-16.25-59.063C483.203,312.906,512,272.031,512,224.438z
        M256,372.531c-53.563,0-97-43.406-97-97c0-53.563,43.438-96.984,97-96.984s96.984,43.422,96.984,96.984
        C352.984,329.125,309.563,372.531,256,372.531z" fill='#fff'/>
    </g>
    </svg>
  ),
  summer: (
    <svg className='snow_btn__svg' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  ),
  autumn: (
    <svg className='snow_btn__svg' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M45.7,36.9c-3.8-6.4-12.3-12.7-18.6-15.2a12.8,12.8,0,0,0-3.4-1c-1.7-.2-2.5-1.4-2.2-2.5s.8-1.4,1.9-1.3c3,.4,7.7,2.3,12.2,5.2l.9.6.3.2,1.2.8a1,1,0,0,0,1.6-.9c-.6-4.7-2.1-9.4-6.5-12.4S21.2,8,14,9.2a80.6,80.6,0,0,1-9.7,1.3H3a.9.9,0,0,0-.9,1.3l.4,1.2c3.1,9.4,7.4,22.3,17.8,25.4a17.4,17.4,0,0,0,4.5.6A19.5,19.5,0,0,0,38,33.7,29.4,29.4,0,0,1,42.3,39,1.9,1.9,0,0,0,44,40a2.2,2.2,0,0,0,1.3-.4A2.1,2.1,0,0,0,45.7,36.9Z" fill='#fff'/>
    </svg>
  )
};

const Home = () => <div className="page"><h1>Home Page</h1><p>Welcome to my site.</p></div>;

function App() {
  const currentSeason = useMemo(() => getCurrentSeason(), []);
  
  const [isEffectVisible, setIsEffectVisible] = useState<boolean>(false);

  const toggleEffect = () => {
    setIsEffectVisible(prev => !prev);
  };

  return (
    <Router>
      <div className="app-container">
        <SeasonEffect isVisible={isEffectVisible} type={currentSeason} />

        <nav className="nav">
          <div className="links">
            <Link to="/projects">Projects</Link>
            <Link to="/plans">Plans</Link>
          </div>
          
          <button 
            className={`snow_btn ${isEffectVisible ? 'active' : ''}`} 
            onClick={toggleEffect}
            title={`Toggle ${currentSeason} mode`}
          >
            {SeasonIcons[currentSeason]}
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