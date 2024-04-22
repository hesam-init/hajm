import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";

interface Props {}

const queryClient = new QueryClient();

export default function ReactQueryProvider({
	children,
}: PropsWithChildren<Props>) {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
}
