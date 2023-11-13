import React from "react";
import { useAuthContext } from "../context/AuthContext";

const HomePage = () => {
	const { user } = useAuthContext();

	return (
		<>
			<h1>Home Page</h1>
			<h3>Hello {user?.username}</h3>
		</>
	);
};

export default HomePage;
