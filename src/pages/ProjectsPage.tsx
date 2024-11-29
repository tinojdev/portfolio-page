import { useState } from "react";

enum Techonology {
	TypeScript = "typescript",
	JavaScript = "javascript",
	Java = "java",
	Rust = "rust",
	Python = "python",
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
		<div className="block m-3 max-w-sm p-6 bg-whitehover:bg-gray-100">
			<div className="flex justify-between">
				<h5 className="mb-2 text-xl font-semibold tracking-tight text-primary">{project.title}</h5>
				<a className="ml-2 text-secondary underline" href={project.link}>
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
		technologies: [Techonology.TypeScript, Techonology.React],
		fields: [Field.Frontend],
		link: "github",
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

	function addToFilter() {}

	return (
		<div>
			<p className="text-secondary pl-5">
				filter:{" "}
				{filter.map((filterItem) => (
					<a>{filterItem}</a>
				))}
			</p>
			<div>
				{PROJECTS.map((project, i) => (
					<ProjectCard key={i} project={project} addToFilter={addToFilter} />
				))}
			</div>
		</div>
	);
}
