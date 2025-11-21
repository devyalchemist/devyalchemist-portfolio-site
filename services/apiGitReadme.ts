export async function getRepoReadme(repo: string) {
	const owner: string = "devyalchemist";

	const res = await fetch(`/api/github?owner=${owner}&repo=${repo}`);

	if (!res.ok) {
		throw new Error("Failed to load repo README");
	}

	return res.json();
	//I guess under the hood nextjs uses express
}
