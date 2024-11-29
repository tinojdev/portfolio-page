import { Link } from "react-router";

const NAV_ITEMS = [
	{
		path: "/",
		name: "home",
	},
	{
		path: "/projects",
		name: "projects",
	},
	{
		path: "/cv",
		name: "cv",
	},
	{
		path: "/contact",
		name: "contact",
	},
];

export default function NavBar() {
	return (
		<nav className="container mx-auto">
			{NAV_ITEMS.map((item) => {
				return (
					<Link key={item.name} className="text-primary font-semibold m-3 underline" to={item.path}>
						{item.name}
					</Link>
				);
			})}
		</nav>
	);
}
