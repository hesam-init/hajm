import "@/assets/styles/main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

if (import.meta.env.DEV) {
	const MobileDevtools = await import("eruda");

	MobileDevtools.default.init();
	MobileDevtools.default.scale(1);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
