import { api } from "./Config";

export const submitVolunteerForm = async (data) => {
    try {
        const response = await api.post("/volunteers", data);
        return response;
    } catch (error) {
        console.error('Volunteer submission error:', {
            status: error.response?.status,
            message: error.response?.data?.message || error.message,
            url: error.config?.url
        });
        throw error;
    }
};
