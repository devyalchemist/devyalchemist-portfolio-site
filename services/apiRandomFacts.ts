export async function getRandomFact(prompt: string) {
	const res = await fetch(`/api/random-facts`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ prompt }),
	});

	return res.json();
}
