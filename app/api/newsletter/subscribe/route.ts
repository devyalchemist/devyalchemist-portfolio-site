import { NextResponse } from "next/server";

// In-memory subscriber cache for development/demo before connecting live DB (Supabase/Convex)
const subscribers: Array<{
	email: string;
	niches: string[];
	subscribedAt: string;
}> = [];

export async function POST(req: Request) {
	try {
		const { email, niches } = await req.json();

		if (!email || !email.includes("@")) {
			return NextResponse.json(
				{ status: 400, error: "Please provide a valid email address." },
				{ status: 400 }
			);
		}

		const selectedNiches =
			Array.isArray(niches) && niches.length > 0 ? niches : ["all"];

		const subscriber = {
			email: email.trim().toLowerCase(),
			niches: selectedNiches,
			subscribedAt: new Date().toISOString(),
		};

		// Prevent duplicate in-memory subscriptions
		const existingIndex = subscribers.findIndex(
			(s) => s.email === subscriber.email
		);
		if (existingIndex >= 0) {
			subscribers[existingIndex] = subscriber;
		} else {
			subscribers.push(subscriber);
		}

		console.log("New Subscriber Registered:", subscriber);

		return NextResponse.json({
			status: 200,
			message: `Subscribed successfully! You're queued for ${selectedNiches.join(
				", "
			)} digests.`,
			subscriber,
		});
	} catch (err) {
		console.error("Subscription error:", err);
		return NextResponse.json(
			{ status: 500, error: "Failed to process subscription." },
			{ status: 500 }
		);
	}
}

export async function GET() {
	return NextResponse.json({
		status: 200,
		count: subscribers.length,
		subscribers,
	});
}
