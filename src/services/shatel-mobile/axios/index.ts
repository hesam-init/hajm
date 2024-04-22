import axiosTauriApiAdapter from "@/lib/axios/adapter";
import { BaseEndpoints } from "@/services/base-endpoints";
import axios from "axios";

export const ShatelMobileHttp = axios.create({
	baseURL: BaseEndpoints.ShatelMobile,
	timeout: 8000,
	adapter: axiosTauriApiAdapter,
});

ShatelMobileHttp.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

ShatelMobileHttp.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	},
);
