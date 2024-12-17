import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import LoadingModal from "./components/modal/LoadingModal";
import Layout from "./components/Layouts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import analytics from "./services/analytic/analytics";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Activities = lazy(() => import("./pages/Activities"));
const OurImpact = lazy(() => import("./pages/OurImpact"));
const Team = lazy(() => import("./pages/Team"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const DonationPage = lazy(() => import("./pages/DonationPage"));
const AboutDetails = lazy(() => import("./pages/AboutDetails"));
const VolunteerPage = lazy(() => import("./pages/VolunteerPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AnalyticsWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    analytics.pageview();
  }, [location]);

  return children;
};

function App() {
  useEffect(() => {
    analytics.init();
  }, []);

  return (
    <Router>
      <Suspense fallback={<LoadingModal />}>
        <AnalyticsWrapper>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/volunteer"
              element={
                <Layout>
                  <VolunteerPage />
                </Layout>
              }
            />
            <Route
              path="/about"
              element={
                <Layout>
                  <About />
                </Layout>
              }
            />
            <Route
              path="/about-details"
              element={
                <Layout>
                  <AboutDetails />
                </Layout>
              }
            />
            <Route
              path="/activities"
              element={
                <Layout>
                  <Activities />
                </Layout>
              }
            />
            <Route
              path="/our-impact"
              element={
                <Layout>
                  <OurImpact />
                </Layout>
              }
            />
            <Route
              path="/team"
              element={
                <Layout>
                  <Team />
                </Layout>
              }
            />
            <Route
              path="/contact-us"
              element={
                <Layout>
                  <ContactUs />
                </Layout>
              }
            />
            <Route
              path="/donatePage"
              element={
                <Layout>
                  <DonationPage />
                </Layout>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnalyticsWrapper>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
}

export default App;
