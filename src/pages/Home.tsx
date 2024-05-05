import type { FunctionComponent } from "../common/types";
import { useCallback, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";

export const Home = (): FunctionComponent => {

	const navigate = useNavigate({})

	const checkAuth = useCallback(async() => {
	
		//@TODO - check login
		await navigate({ to: '/tutorial' })	
	
	} ,[navigate])

	useEffect(() => {
		checkAuth()
			.catch((error) => {
				throw error
			});
	} ,[checkAuth])

	return (
		<div className="bg-blue-300  font-bold w-screen h-screen flex flex-col justify-center items-center ">
			<p className="text-white text-6xl">Hello, world!</p>
		</div>
	);
};
