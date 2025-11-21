import { NextResponse } from "next/server";

export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);
		const repo = searchParams.get("repo");
		const owner = searchParams.get("owner");

		if (!repo || !owner) {
			return NextResponse.json(
				{ error: "Missing repo or owner parameters" },
				{ status: 400 }
			);
		}

		// Fetch README from GitHub
		const readmeRes = await fetch(
			`https://api.github.com/repos/${owner}/${repo}/readme`,
			{
				headers: {
					Accept: "application/vnd.github.v3.raw",
					// Optional: add GitHub token if you want higher rate limit
					// Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
				},
			}
		);

		if (!readmeRes.ok) {
			return NextResponse.json(
				{ error: "Unable to fetch README" },
				{ status: readmeRes.status }
			);
		}

		const readmeText = await readmeRes.text();

		// You can process/summarize here if needed
		const summary = summarize(readmeText);

		return NextResponse.json({
			repo,
			owner,
			summary,
			fullReadme: readmeText,
		});
	} catch (err) {
		return NextResponse.json(
			{ error: "Server error", details: err },
			{ status: 500 }
		);
	}
}

// simple example summarizer
function summarize(text: string) {
	return text.split("\n").slice(0, 5).join("\n"); // first 5 lines
}
