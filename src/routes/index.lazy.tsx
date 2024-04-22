import Button from "@/components/buttons";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: Page,
});

function Page() {

	return (
		<div className="p-2">
			<Button />
			<h3>Wassup boy !</h3>
		</div>
	);
}
