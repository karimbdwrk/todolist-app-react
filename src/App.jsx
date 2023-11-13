import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoList2 from "./components/ToDoList2";

import "./App.css";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/signin' element={<SignInPage />} />
					<Route path='/signup' element={<SignUpPage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
