import { http } from "@/services/shatel-mobile/axios";
import { ShatelMobileEndpoints } from "@/services/shatel-mobile/endpoints";
import type { RemainedResponse } from "@/services/shatel-mobile/models/types";
import { useQuery } from "@tanstack/react-query";

export function useRemained(phone_number: string) {
	return useQuery({
		queryKey: [ShatelMobileEndpoints.Remained],
		queryFn: () => {
			return http.post<RemainedResponse>(ShatelMobileEndpoints.Remained, {
				msisdn: phone_number,
			});
		},
	});
}
