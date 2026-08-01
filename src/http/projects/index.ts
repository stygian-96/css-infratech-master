import api from "../axiosInstance";

export const projectService = {
  getPublishedProjects: async (params?: any): Promise<any> => {
    const response = await api.get<any>("/projects/published", { params });
    return response.data;
  },
  getPublishedProject: async (id: string): Promise<any> => {
    const response = await api.get<any>(`/projects/published/${id}`);
    return response.data;
  },
};
