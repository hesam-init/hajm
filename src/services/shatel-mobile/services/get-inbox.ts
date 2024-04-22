import { http } from "@/services/shatel-mobile/axios";
import { ShatelMobileEndpoints } from "@/services/shatel-mobile/endpoints";
import type { InboxResponse } from "@/services/shatel-mobile/models/types";
import { useQuery } from "@tanstack/react-query";

export function useInbox(phone_number: string) {
	return useQuery({
		queryKey: [ShatelMobileEndpoints.Inbox],
		queryFn: () => {
			return http.post<InboxResponse>(ShatelMobileEndpoints.Inbox, {
				msisdn: phone_number,
			});
		},
	});
}
