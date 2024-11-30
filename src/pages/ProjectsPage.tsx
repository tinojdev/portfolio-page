import { CSSProperties, useState } from "react";

enum Techonology {
	TypeScript = "typescript",
	JavaScript = "javascript",
	Tailwind = "tailwind",
	Java = "java",
	Rust = "rust",
	Python = "python",
	Django = "django",
	React = "react",
	Nodejs = "nodejs",
	FFmpeg = "ffmpeg",
}

enum Field {
	Backend = "backend",
	Frontend = "frontend",
	Iot = "iot",
}

interface Project {
	title: string;
	description: string;
	technologies: Techonology[];
	link: string;
	fields: Field[];
}
function ProjectCard({
	project,
	addToFilter,
}: {
	project: Project;
	addToFilter: (toAdd: Techonology | Field) => void;
}) {
	return (
		<div className="block m-3 max-w-sm py-6 bg-whitehover:bg-gray-100">
			<div className="flex justify-between">
				<h5 className="mb-2 text-xl font-semibold tracking-tight text-primary">{project.title}</h5>
				<a className="ml-2 text-secondary underline" href={project.link} target="_blank">
					github
				</a>
			</div>

			<p className="text-secondary">{project.description}</p>
			<p className="text-secondary pt-1">
				Tech:{" "}
				{project.technologies.map((tech, i) => (
					<a key={i} className="underline p-1 cursor-pointer" onClick={() => addToFilter(tech)}>
						{tech}
					</a>
				))}
			</p>
			<p className="text-secondary">
				Subjects:{" "}
				{project.fields.map((field, i) => (
					<a key={i} className="underline p-1 cursor-pointer" onClick={() => addToFilter(field)}>
						{field}
					</a>
				))}
			</p>
		</div>
	);
}

const PROJECTS: Project[] = [
	{
		title: "Portfolio page",
		description: "This webpage you are viewing right now",
		technologies: [Techonology.TypeScript, Techonology.React, Techonology.Tailwind],
		fields: [Field.Frontend],
		link: "https://github.com/tinojdev/portfolio-page",
	},
	{
		title: "Discord music bot (Typescript)",
		description: "A fully featured music bot for discord.",
		technologies: [Techonology.TypeScript, Techonology.Nodejs, Techonology.FFmpeg],
		fields: [Field.Backend],
		link: "github",
	},
	{
		title: "Discord music bot (Python)",
		description: "The music bot rewritten in Python",
		technologies: [Techonology.Python, Techonology.FFmpeg],
		fields: [Field.Backend],
		link: "github",
	},
	{
		title: "Discord music bot (Rust)",
		description: "The music bot re-rewritten in Rust",
		technologies: [Techonology.Rust, Techonology.FFmpeg],
		fields: [Field.Backend],
		link: "github",
	},
];

export default function ProjectsPage() {
	const [filter, setFilter] = useState<(Techonology | Field)[]>([]);

	function addToFilter(toAdd: Techonology | Field) {
		if (filter.includes(toAdd)) return;

		setFilter([...filter, toAdd]);
	}

	function removeFromFilter(toRemove: Techonology | Field) {
		setFilter(filter.filter((item) => item !== toRemove));
	}

	const filteredProjects =
		filter.length === 0
			? PROJECTS
			: PROJECTS.filter((project) =>
					filter.every(
						(filterItem) =>
							project.technologies.includes(filterItem as Techonology) || project.fields.includes(filterItem as Field)
					)
			  );

	return (
		<div className="container mx-auto pt-5">
			<p className="text-secondary font-medium">
				filter:{" "}
				<div
					className="inline"
					style={
						filter.length !== 0
							? ({
									"--angle": "0deg",
									borderWidth: "2px",
									borderRadius: "2px",
									borderImage: "conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta,red) 1",
									animation: "1s rotate linear infinite",
							  } as CSSProperties) // force to CSSProperties since --angle is custom parameter
							: {}
					}
				>
					{filter.map((filterItem) => (
						<a className="cursor-pointer underline px-1" onClick={() => removeFromFilter(filterItem)}>
							{filterItem}
						</a>
					))}
				</div>
				{filter.length !== 0 ? "(click tech or subject to remove)" : "(click tech or subject to filter)"}
			</p>
			{filter.length !== 0 && (
				<p className="text-red-400 cursor-pointer">
					<a onClick={() => setFilter([])}>(remove all)</a>{" "}
				</p>
			)}
			<div>
				{filteredProjects.map((project, i) => (
					<ProjectCard key={i} project={project} addToFilter={addToFilter} />
				))}
			</div>
		</div>
	);
}
