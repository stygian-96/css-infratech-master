import api from "../axiosInstance";

export const gallaryService = {
  getPublishedgallary: async (params?: any): Promise<any> => {
    const response = await api.get<any>("/gallary/published", { params });
    return response.data;
  },

  getPublishedgallaryById: async (id: string): Promise<any> => {
    const response = await api.get<any>(`/gallary/${id}/published`);
    return response.data;
  },
};
