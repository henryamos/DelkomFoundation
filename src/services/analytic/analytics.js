import ReactGA from "react-ga4";

// Export analytics service object
const analytics = {
  // Initialize GA with your measurement ID
  init: () => {
    ReactGA.initialize("G-TNX0NGJJGF");
  },

  // Track page views
  pageview: () => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  },

  // Track events
  event: (category, action, label) => {
    ReactGA.event({
      category: category,
      action: action,
      label: label,
    });
  },

  // Track user interactions
  buttonClick: (buttonName) => {
    analytics.event("Button", "Click", buttonName);
  },

  // Track donations
  donation: (amount) => {
    analytics.event("Donation", "Complete", `Amount: ${amount}`);
  },

  // Track form submissions
  formSubmission: (formName) => {
    analytics.event("Form", "Submit", formName);
  },
};

// Export as default and named export
export default analytics;
