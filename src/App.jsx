import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingModal from './components/modal/LoadingModal';
import Layout from './components/Layouts';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Activities = lazy(() => import('./pages/Activities'));
const OurImpact = lazy(() => import('./pages/OurImpact'));
const Team = lazy(() => import('./pages/Team'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const DonationPage = lazy(() => import('./pages/DonationPage'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    let loadingTime = 2000;

    if (connection) {
      const effectiveType = connection.effectiveType;
      switch (effectiveType) {
        case 'slow-2g':
          loadingTime = 5000;
          break;
        case '2g':
          loadingTime = 4000;
          break;
        case '3g':
          loadingTime = 3000;
          break;
        case '4g':
          loadingTime = 2000;
          break;
        default:
          loadingTime = 2000;
      }
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, loadingTime);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && <LoadingModal />}
      <Suspense fallback={<LoadingModal />}>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/activities" element={<Layout><Activities /></Layout>} />
          <Route path="/our-impact" element={<Layout><OurImpact /></Layout>} />
          <Route path="/team" element={<Layout><Team /></Layout>} />
          <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
          <Route path="/donate" element={<Layout><DonationPage /></Layout>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
