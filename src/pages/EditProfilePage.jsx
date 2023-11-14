import React, { useState, useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";

const EditProfilePage = () => {
	const { user, setUser } = useAuthContext();

	return (
		<>
			<p>Edt profile</p>
		</>
	);
};

export default EditProfilePage;
