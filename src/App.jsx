import React from "react";
import { ConfigProvider } from "antd";

import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoList2 from "./components/ToDoList2";

import "./App.css";

function App() {
	return (
		<>
			<ConfigProvider
				theme={{
					token: {
						// Seed Token
						colorPrimary: "#00b96b",
						borderRadius: 2,

						// Alias Token
						colorBgContainer: "#f6ffed",
					},
				}}>
				{/* <Header /> */}
				{/* <ToDoList /> */}
				<ToDoList2 />
			</ConfigProvider>
		</>
	);
}

export default App;
