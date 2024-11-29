import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import Layout from "./components/Layout.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import CVPage from "./pages/CVPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/cv" element={<CVPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
