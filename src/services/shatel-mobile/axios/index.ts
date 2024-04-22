import axiosTauriApiAdapter from "@/lib/axios/adapter";
import { BaseEndpoints } from "@/services/base-endpoints";
import axios from "axios";

const cookie =
	"session=6a0eddd2-2ea0-4a97-9e1b-792a2ba2cd9c.MewwHhLvpxe5ob8daNU_6wVAqlg";

export const http = axios.create({
	baseURL: BaseEndpoints.ShatelMobile,
	timeout: 8000,
	adapter: axiosTauriApiAdapter,
});

http.interceptors.request.use(
	(config) => {
		if (cookie) {
			config.headers.cookie = cookie;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

http.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	},
);
