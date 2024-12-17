import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import notFoundImg from '../assets/404.svg'; // You'll need to add this SVG

const NotFound = () => {
  return (
    <motion.div 
      className="min-h-screen bg-bgDark flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-[90%] md:w-[80%] mx-auto text-center">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={notFoundImg} 
            alt="404 Not Found" 
            className="w-full max-w-md mx-auto mb-8"
          />
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Link 
            to="/"
            className="inline-block bg-darkYellow text-dark hover:bg-dark hover:text-white 
                     py-3 px-8 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound; 