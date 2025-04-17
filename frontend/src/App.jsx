import { Routes, Route } from 'react-router-dom';

//pages
import VerificationPage from './pages/Verification'
import Listings from './pages/Listings'

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<VerificationPage />} />
        <Route path="/listings" element={<Listings />} /> {/* Route for listings page */}
      </Routes>
    </div>
  );
}

export default App