import {
	ShatelMobileEndpoints,
	type InboxResponse,
	type ProfileResponse,
	type RemainedResponse,
} from "@/services/shatel-mobile";

import { ShatelMobileHttp } from "@/services/shatel-mobile/axios";

const cookie =
	"session=6a0eddd2-2ea0-4a97-9e1b-792a2ba2cd9c.MewwHhLvpxe5ob8daNU_6wVAqlg";

function setCookie(cookie: string) {
	return {
		headers: {
			cookie: cookie,
		},
	};
}

export const ShatelMobileHttpServices = {
	fetchRemained: (phone_number: string) =>
		ShatelMobileHttp.post<RemainedResponse>(
			ShatelMobileEndpoints.Remained,
			{
				msisdn: phone_number,
			},
			{
				...setCookie(cookie),
			},
		),

	fetchProfile: () =>
		ShatelMobileHttp.post<ProfileResponse>(
			ShatelMobileEndpoints.Profile,
			undefined,
			{
				...setCookie(cookie),
			},
		),

	fetchInbox: (phone_number: string) =>
		ShatelMobileHttp.post<InboxResponse>(
			ShatelMobileEndpoints.Inbox,
			{
				msisdn: phone_number,
			},
			{
				...setCookie(cookie),
			},
		),
};
