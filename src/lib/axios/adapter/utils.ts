import { Body, ResponseType as TauriResponseType } from "@tauri-apps/api/http";
import type { ResponseType as AxiosResponseType } from "axios";
import buildUrl, { type IQueryParams } from "build-url-ts";
import URLParse from "url-parse";
import type { TauriAxiosRequestConfig } from "./types";

export function getTauriResponseType(
	type?: AxiosResponseType,
): TauriResponseType {
	let responseType = TauriResponseType.JSON;
	if (type !== undefined && type !== null) {
		switch (type.toLowerCase()) {
			case "json": {
				responseType = TauriResponseType.JSON;
				break;
			}
			case "text": {
				responseType = TauriResponseType.Text;
				break;
			}
			default: {
				responseType = TauriResponseType.Binary;
			}
		}
	}
	return responseType;
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function buildTauriRequestData(data?: any): Body | undefined {
	if (data === undefined || data === null) {
		return undefined;
	}
	if (typeof data === "string") {
		return Body.text(data);
	}
	if (typeof data === "object") {
		return Body.json(data);
	}
	if (data instanceof FormData) {
		return Body.form(data);
	}

	return Body.bytes(data);
}

export const buildRequestUrl = (
	config: Omit<TauriAxiosRequestConfig, "headers">,
): string => {
	if (
		(config.baseURL === undefined ||
			config.baseURL === null ||
			config.baseURL.trim() === "") &&
		(config.url === undefined ||
			config.url === null ||
			config.url.trim() === "")
	) {
		throw new Error("config.baseURL or config.url must be specified");
	}

	if (config.baseURL) {
		return (
			buildUrl(config.baseURL, {
				path: config.url,
				queryParams: config.params,
			}) || ""
		);
	}

	const url = config.url ? config.url : "";
	const urlObj = URLParse(url, true);
	const path = urlObj.pathname === "/" ? undefined : urlObj.pathname;
	const params = urlObj.query;
	urlObj.set("pathname", "");
	urlObj.set("query", "");

	return (
		buildUrl(urlObj.toString(), {
			path: path,
			queryParams: mergeQueryParams(params, config.params),
		}) || ""
	);
};

export function mergeQueryParams(
	...queryParams: IQueryParams[]
): IQueryParams | undefined {
	const params: IQueryParams = {};
	// biome-ignore lint/complexity/noForEach: <explanation>
	queryParams.forEach((queryParam) => Object.assign(params, queryParam));
	return Object.keys(params).length === 0 ? undefined : params;
}
