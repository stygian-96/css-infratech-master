import { useQuery } from "@tanstack/react-query";
import { pressService } from "@/http/press";

export const usePublishedPress = () => {
  return useQuery<any>({
    queryKey: ["published-press"],
    queryFn: pressService.getPublishedPress,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
