const RECIPES = [
	{
		link: "https://ibbeachnana.blog/soups-on/bayless-pot-luck-mexican-chicken-tortilla-soup/",
		text: "rick payless mexican chicken tortilla soup",
	},
	{
		link: "https://www.kasvisannos.fi/paras-dal-resepti/",
		text: "very good dal recipe (in finnish)",
	},
	{
		link: "https://cookieandkate.com/easy-refried-beans-recipe/",
		text: "easy refried beans",
	},
	{
		link: "https://christieathome.com/blog/sweet-spicy-gochujang-chicken/",
		text: "gochujang chicken",
	},
	{
		link: "https://www.youtube.com/watch?v=naEpZKwbE_c",
		text: "chickpea curry",
	},
];

export default function RecipesPage() {
	return (
		<div className="container mx-auto">
			<h1 className="text-2xl text-primary pt-5 pb-0"> These are my favorite recipes</h1>
			<p className="text-secondary pb-3">Recipes that I (sometimes loosely) followed that turned out great.</p>
			<ul>
				{RECIPES.map((recipe, i) => (
					<li key={i} className="py-1">
						<a href={recipe.link} target="_blank" className="text-secondary underline ">
							{recipe.text}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
