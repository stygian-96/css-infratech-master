import api from "../axiosInstance";

export const blogService = {
  getBlogs: async (params?: any): Promise<any> => {
    const response = await api.get<any>("/blog/published", { params });
    return response.data;
  },

  getBlog: async (identifier: string): Promise<any> => {
    const response = await api.get<any>(`/blog/${identifier}`);
    return response.data;
  },
};
