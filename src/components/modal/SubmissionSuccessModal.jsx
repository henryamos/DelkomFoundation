import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaEnvelope } from 'react-icons/fa';

const SubmissionSuccessModal = ({ isOpen, email, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl max-w-md w-full mx-auto overflow-hidden"
        >
          {/* Success Icon Animation */}
          <div className="bg-green-50 p-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1 
              }}
              className="flex justify-center"
            >
              <FaCheckCircle className="text-green-500 text-6xl" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              Thank You for Volunteering!
            </h2>
            
            {/* Email notification section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-blue-50 rounded-lg p-4 mb-6"
            >
              <div className="flex items-center justify-center space-x-2 text-blue-600 mb-2">
                <FaEnvelope className="text-xl" />
                <span className="font-semibold">Email Confirmation Sent</span>
              </div>
              <p className="text-center text-sm text-blue-600">
                We've sent a confirmation to:
                <br />
                <span className="font-medium">{email}</span>
              </p>
            </motion.div>

            <p className="text-gray-600 text-center mb-6">
              Your application has been successfully submitted. Please check your email for further instructions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/')}
                className="px-6 py-2 bg-dark text-white rounded-lg hover:bg-darkYellow transition-colors duration-300 font-medium"
              >
                Go to Home
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-6 py-2 border-2 border-dark text-dark rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium"
              >
                Close
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SubmissionSuccessModal; 