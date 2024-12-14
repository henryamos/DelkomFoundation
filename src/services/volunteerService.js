import { api } from "./Config";

export const submitVolunteerForm = async (formData) => {
  return await api.post("/volunteers", formData);
};
