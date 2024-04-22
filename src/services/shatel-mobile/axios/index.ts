import axiosTauriApiAdapter from "@/lib/axios/adapter";
import axios from "axios";
import { ShatelMobileEndpoints } from "..";

export const ShatelMobileHttp = axios.create({
	baseURL: ShatelMobileEndpoints.Base,
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
