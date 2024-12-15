import { api } from './Config';

export const contactService = {
  submitContactForm: async (formData) => {
    try {
      const response = await api.post('/contact/submit', formData);
      return response.data;
    } catch (error) {
      if (error.response) {
        throw {
          status: error.response.data.status,
          message: error.response.data.message,
          error: error.response.data.error
        };
      }
      throw {
        status: 'error',
        message: 'Network error. Please check your connection.',
      };
    }
  }
}; 