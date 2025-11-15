
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CategoriesPage from './pages/CategoriesPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Router>
  );
}
