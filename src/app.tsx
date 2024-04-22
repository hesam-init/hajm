import { RouterProvider, createRouter } from "@tanstack/react-router";

import ReactQueryProvider from "@/providers/react-query";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

export default function App() {
	return (
		<ReactQueryProvider>
			<RouterProvider router={router} />
		</ReactQueryProvider>
	);
}
