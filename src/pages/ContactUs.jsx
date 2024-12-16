import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { FaWhatsapp } from "react-icons/fa";
import { contactService } from "../services/contactService";

const ContactUs = () => {
  const formRef = useRef({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // WhatsApp configuration
  const whatsappNumber = "+233548151982";
  const whatsappMessage = "Hello, I would like to get in touch with Delkom Charity Foundation.";

  // Validation rules
  const validateForm = () => {
    const newErrors = {};
    const formData = formRef.current;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters long";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    if (formData.phone && !/^[0-9+]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    formRef.current[name] = value;
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const resetForm = () => {
    const form = document.getElementById('contactForm');
    if (form) form.reset();
    formRef.current = {
      name: '',
      email: '',
      subject: '',
      message: '',
      phone: ''
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsLoading(true);

    try {
      const response = await contactService.submitContactForm(formRef.current);
      
      if (response.status === 'success') {
        toast.success(response.message);
        resetForm();
        setErrors({});
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error(error.error || error.message || 'Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderInput = (type, name, label, placeholder, required = true) => (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        defaultValue={formRef.current[name]}
        onChange={handleChange}
        required={required}
        className={`shadow appearance-none border ${
          errors[name] ? 'border-red-500' : 'border-gray-300'
        } rounded w-full py-2 px-3 text-gray-700 leading-tight
        focus:outline-none focus:ring-2 focus:ring-darkShade focus:border-transparent
        transition-all duration-200 ease-in-out`}
        placeholder={placeholder}
      />
      {errors[name] && (
        <p className="text-red-500 text-xs italic mt-1">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bgDark p-4">
      <h1 className="text-3xl font-bold text-primary mb-6">
        Contact <span className="text-darkYellow">Us </span>
      </h1>

      <button
        onClick={handleWhatsAppClick}
        className="flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg mb-6 hover:bg-green-600 transition-colors"
      >
        <FaWhatsapp className="text-xl" />
        Chat on WhatsApp
      </button>

      <form
        id="contactForm"
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
      >
        {renderInput("text", "name", "Name", "Your Name")}
        {renderInput("email", "email", "Email", "Your Email")}
        {renderInput("tel", "phone", "Phone Number", "Your Phone Number", false)}
        {renderInput("text", "subject", "Subject", "Subject")}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            defaultValue={formRef.current.message}
            onChange={handleChange}
            required
            className={`shadow appearance-none border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } rounded w-full py-2 px-3 text-gray-700 leading-tight
            focus:outline-none focus:ring-2 focus:ring-darkShade focus:border-transparent
            transition-all duration-200 ease-in-out`}
            placeholder="Your Message"
            rows="4"
          />
          {errors.message && (
            <p className="text-red-500 text-xs italic mt-1">{errors.message}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-black hover:bg-gray-800 text-primary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
