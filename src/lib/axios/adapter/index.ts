import { getClient, type HttpVerb } from "@tauri-apps/api/http";
import { AxiosError, HttpStatusCode, type AxiosPromise } from "axios";
import type { TauriAxiosRequestConfig } from "./types";
import {
	buildRequestUrl,
	buildTauriRequestData,
	getTauriResponseType,
} from "./utils";

export const axiosTauriApiAdapter = (
	config: TauriAxiosRequestConfig,
): AxiosPromise =>
	// biome-ignore lint/suspicious/noAsyncPromiseExecutor: <explanation>
	new Promise(async (resolve, reject) => {
		const client = await getClient({
			maxRedirections: config.maxRedirects,
		});

		let timeout = 5;

		if (config.timeout !== undefined && config.timeout > 0) {
			timeout = Math.round(config.timeout / 1000);
		}

		client
			.request({
				body: buildTauriRequestData(config.data),
				headers: {
					...config.headers,
				},
				responseType: getTauriResponseType(config.responseType),
				timeout: timeout,
				url: buildRequestUrl(config),
				method: <HttpVerb>config.method?.toUpperCase(),
			})
			.then((response) => {
				const statusText = HttpStatusCode[response.status];

				if (response.ok) {
					return resolve({
						data: response.data,
						status: response.status,
						statusText: statusText,
						headers: {
							...response.headers,
							"set-cookie": response.rawHeaders["set-cookie"],
						},
						config: config,
					});
				}

				reject(
					new AxiosError(
						`Request failed with status code ${response.status}`,
						[
							AxiosError.ERR_BAD_REQUEST,
							AxiosError.ERR_BAD_RESPONSE,
						][Math.floor(response.status / 100) - 4],
						config,
						client,
						{
							data: response.data,
							status: response.status,
							statusText: statusText,
							headers: response.headers,
							config: config,
						},
					),
				);
			})
			.catch((error) => {
				return reject(error);
			});
	});

export default axiosTauriApiAdapter;
