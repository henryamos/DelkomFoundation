import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdClose } from "react-icons/md";

const VolunteerFormModal = ({ isOpen, onClose }) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      email: emailRef.current.value,
      region: regionRef.current.value,
      city: cityRef.current.value,
    };

    try {
      const response = await fetch("https://api.com/volunteers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Thank you for registering as a volunteer!");
        onClose();
      } else {
        toast.error(
          "There was an error submitting your form. Please try again."
        );
      }
    } catch (error) {
      console.log("Error", error);
      toast.error("There was an error submitting your form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed  capitalize inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white p-3 rounded-lg shadow-lg w-full max-w-md mx-4">
        <button
          onClick={onClose}
          className="bg-dark rounded-full p-2 hover:bg-opacity-80 float-right"
        >
          <MdClose className="text-darkYellow" size={16} />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-dark text-center">
          Volunteer Registration
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid   capitalize grid-cols-1 md:grid-cols-2 text-overlay gap-4">
            <div className="mb-4">
              <label className="block  text-gray-700">First Name</label>
              <input
                ref={firstNameRef}
                type="text"
                placeholder="Enter your first name"
                className="w-full  px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <input
                ref={lastNameRef}
                type="text"
                placeholder="Enter your last name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                ref={phoneNumberRef}
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                ref={emailRef}
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Region</label>
              <input
                ref={regionRef}
                type="text"
                placeholder="Enter your region"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">City</label>
              <input
                ref={cityRef}
                type="text"
                placeholder="Enter your city"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-dark  hover:bg-overlay text-white font-bold py-2 px-4 rounded transition duration-300"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default VolunteerFormModal;
