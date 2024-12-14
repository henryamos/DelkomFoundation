import { useRef } from "react";

import { toast } from "react-toastify";
import logo from '../assets/LogoDel.png'

const VolunteerPage = () => {
  // Create refs for form fields
  const fullNameRef = useRef();
  const primaryContactRef = useRef();
  const whatsappContactRef = useRef();
  const residenceRef = useRef();
  const programsRef = useRef([]);
  const reasonRef = useRef();
  const hearAboutUsRef = useRef();
  const pledgeRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get selected programs
    const selectedPrograms = Array.from(
      document.querySelectorAll('input[name="programs"]:checked')
    ).map((checkbox) => checkbox.value);

    // Create form data object
    const formData = {
      fullName: fullNameRef.current.value,
      primaryContact: primaryContactRef.current.value,
      whatsappContact: whatsappContactRef.current.value,
      residence: residenceRef.current.value,
      programs: selectedPrograms,
      reason: reasonRef.current.value,
      hearAboutUs: hearAboutUsRef.current.value,
      pledge: pledgeRef.current.value,
    };

    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
        e.target.reset(); // Reset form after successful submission
      } else {
        toast.error("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md">
        {/* Header Section */}
        <div className="bg-dark text-white p-8 rounded-t-lg">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Delkom Logo" className="h-24 w-auto" />
          </div>
          <h1 className="text-2xl font-bold text-center">
            DELKOM CHARITY FOUNDATION
          </h1>
          <h2 className="text-xl text-center mt-2">
            VOLUNTEERS REGISTRATION FORM
          </h2>
          <p className="text-center mt-4">
            Thank you for choosing to volunteer with us!
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Volunteer's Full name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              ref={fullNameRef}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Primary Contact */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Primary Contact (eg. +233 548151982){" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              ref={primaryContactRef}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* WhatsApp Contact */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              WhatsApp Contact <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              ref={whatsappContactRef}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Place of Residence */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Place Of Residence (currently){" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              ref={residenceRef}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Programs Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Which of our programs would you like to volunteer to within the
              three Quarters' of the year?{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {[
                "Mentoring / Coaching Session & Sensitization (first quarter ie. within Jan - April)",
                "Tech Drive (ICT training) (second quarter ie. within May - Aug)",
                "Christmas Outreach (third quarter ie. December )",
              ].map((program) => (
                <div key={program} className="flex items-start">
                  <input
                    type="checkbox"
                    name="programs"
                    value={program}
                    className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-sm text-gray-700">
                    {program}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Reason for Volunteering */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Why do you wish to volunteer with us?{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              ref={reasonRef}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              rows="4"
            />
          </div>

          {/* How did you hear about us */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              How did you hear about us? <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {[
                "social media (ie. instagram, facebook, X, etc)",
                "family /friends",
                "others",
              ].map((option) => (
                <div key={option} className="flex items-center">
                  <input
                    type="radio"
                    name="hearAboutUs"
                    value={option}
                    ref={
                      option ===
                      "social media (ie. instagram, facebook, X, etc)"
                        ? hearAboutUsRef
                        : null
                    }
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                  />
                  <label className="ml-2 text-sm text-gray-700">{option}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Pledge */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Do you pledge to adhere to all commitment of Delkom charity
              foundation? (especially volunteers financial commitment){" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {["yes", "no"].map((option) => (
                <div key={option} className="flex items-center">
                  <input
                    type="radio"
                    name="pledge"
                    value={option}
                    ref={option === "yes" ? pledgeRef : null}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                  />
                  <label className="ml-2 text-sm text-gray-700">{option}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-dark text-white py-2 px-4 rounded-md hover:bg-darkYellow focus:outline-none focus:ring-2 focus:ring-lightYellow hover:text-dark focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerPage;
