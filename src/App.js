import axios from 'axios';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import RoutesComponents from './config/RoutesComponents';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<RoutesComponents />} />
    </Routes>
  );
}

export default App;
