import {
  Routes, Route,
} from 'react-router-dom';
import Home from './pages/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:id" element={<>Detail</>} />
    </Routes>
  );
}

export default AppRoutes;
