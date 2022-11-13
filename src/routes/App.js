import Login from '../componentes/Login';
import Inicio from '../componentes/Inicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='inicio' element={<Inicio />} />
      </Routes>
    </Router>
  );
}