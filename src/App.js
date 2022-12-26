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
