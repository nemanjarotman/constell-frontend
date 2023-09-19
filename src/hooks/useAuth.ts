// hooks/useAuth.js
import { useQuery } from "@tanstack/react-query";

async function fetchAuthStatus() {
  const res = await fetch("/api/accounts/me", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    },
  });
  return res.json();
}

export function useAuth() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      try {
        const res = await fetchAuthStatus();
        return res;
      } catch (error) {
        console.error("Error fetching auth status:", error);
        throw error;
      }
    },
  });

  console.log(data, isLoading, error, isFetching);

  return { isLoading, error, data, isFetching };
}
