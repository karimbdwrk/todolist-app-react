import React, { useState, useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";

const EditProfilePage = () => {
	const { user, setUser } = useAuthContext();

	return (
		<>
			<p>Edit profile : {user?.id}</p>
		</>
	);
};

export default EditProfilePage;
