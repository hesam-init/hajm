import { useProfile } from "@/services/shatel-mobile/services/get-profile";
import { useRemained } from "@/services/shatel-mobile/services/get-remained";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: Page,
});

function Page() {
	const profileQuery = useProfile();
	const remainedQuery = useRemained("9981498981");

	console.log(profileQuery.data?.data);
	console.log(remainedQuery.data?.data);

	return (
		<div className="p-2">
			<h1>Home Page</h1>
		</div>
	);
}
