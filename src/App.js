
import './App.css';
import Navbar from './components/navbar/Navbar';
import Blog from './pages/Blog';

import Home from './pages/Home';
import Mekanlar from './pages/Mekanlar';
import Hatlar from './pages/Hatlar';
import Etkinlik from './pages/Etkinlik';
import Giris from './pages/Giris';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/etkinlik" element={<Etkinlik />} />
      <Route path="/mekanlar" element={<Mekanlar />} />
      <Route path="/hatlar" element={<Hatlar />} />
      <Route path="/giris" element={<Giris />} />
     
    </Routes>
  </BrowserRouter>
 
   
    </div>

  );
}

export default App;
