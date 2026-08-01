import api from "../axiosInstance";

export const pressService = {
  getPublishedPress: async (params?: any): Promise<any> => {
    const response = await api.get<any>("/press/published", { params });
    return response.data;
  },
};
