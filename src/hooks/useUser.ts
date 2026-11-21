import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/lib/api";

// the app always uses user with id 1
export function useUser() {
  return useQuery({
    queryKey: ["user", 1],
    queryFn: () => getUser(1),
  });
}
