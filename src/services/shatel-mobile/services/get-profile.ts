import { http } from "@/services/shatel-mobile/axios";
import { ShatelMobileEndpoints } from "@/services/shatel-mobile/endpoints";
import type { ProfileResponse } from "@/services/shatel-mobile/models/types";
import { useQuery } from "@tanstack/react-query";

export function useProfile() {
	return useQuery({
		queryKey: [ShatelMobileEndpoints.Profile],
		queryFn: () => {
			return http.post<ProfileResponse>(ShatelMobileEndpoints.Profile);
		},
	});
}
