import React, { useState, useEffect } from "react";

const Header = () => {
	const [dataHeader, setDataHeader] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			try {
				const response = await fetch(
					"http://localhost:1337/api/header?populate=*"
				);
				const dataJson = await response.json();
				setDataHeader(dataJson);
				setLoading(false);
				console.log(dataJson);
			} catch (error) {
				console.error("Erreur API :", error);
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<h1>Header</h1>
			{loading ? (
				<p>Loading ...</p>
			) : (
				<>
					{/* <img
						src={
							"http://localhost:1337" +
							dataHeader?.data.attributes.logo.data.attributes.url
						}
					/> */}
					<nav>
						{dataHeader?.data.attributes.navigation.map(
							(navItem, id) => (
								<a key={id} href={navItem.url}>
									{navItem.title}
								</a>
							)
						)}
					</nav>
				</>
			)}
		</>
	);
};

export default Header;
