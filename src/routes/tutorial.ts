import { createFileRoute } from "@tanstack/react-router";
import { Tutorial } from "../pages/Tutorial";

export const Route = createFileRoute("/tutorial")({
	component: Tutorial,
});
