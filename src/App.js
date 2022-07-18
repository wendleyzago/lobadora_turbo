


import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';

import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
    
  )
}

export default App;
