import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const ProfilePage = () => {
	const [loading, setLoading] = useState(false);

	const { user, setUser } = useAuthContext();

	return (
		<>
			<h2>{user?.username}</h2>
			<p>{user.email}</p>
			<Link to='/editprofile'>Edit Profile</Link>
		</>
	);
};

export default ProfilePage;
