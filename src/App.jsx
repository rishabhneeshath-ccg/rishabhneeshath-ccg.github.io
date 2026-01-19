import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import HomeScroll from './pages/HomeScroll';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen bg-background font-sans text-white selection:bg-accent selection:text-white">
          <Routes>
            <Route path="/" element={<HomeScroll />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
