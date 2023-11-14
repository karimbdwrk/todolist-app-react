import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";

import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoList2 from "./components/ToDoList2";

import "./App.css";

function App() {
	return (
		<>
			<AuthProvider>
				<Router>
					<Header />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/signin' element={<SignInPage />} />
						<Route path='/signup' element={<SignUpPage />} />
						<Route path='/profile' element={<ProfilePage />} />
						<Route
							path='/editprofile'
							element={<EditProfilePage />}
						/>
					</Routes>
				</Router>
			</AuthProvider>
		</>
	);
}

export default App;
