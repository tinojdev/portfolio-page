import { Outlet } from "react-router";
import NavBar from "./NavBar";

export default function Layout() {
	return (
		<div className="bg-background w-full">
			<div className="container mx-auto pb-5">
				<h1 className="text-xl font-semibold text-primary">Tinojdev</h1>
				<p className="text-secondary">
					Computer science student at Aalto university.
					<br />
					Currently on last year of master's in Security and Cloud Computing
				</p>
			</div>
			<NavBar />
			<Outlet />
		</div>
	);
}
