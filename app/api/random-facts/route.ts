import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_KEY });
export async function POST(req: Request) {
	try {
		const { prompt } = await req.json();
		console.log("The prompt is: ", prompt);
		const response = await ai.models.generateContent({
			model: "gemini-2.5-flash",
			contents: `
Using the content below as a guide: 
===content===
Thank you for the corrections. That changes the picture significantly! It sounds like the "Grade 10" comment might have been a persona test or a joke that I took too literally.

Knowing that you are a 22-year-old male (born August 4, 2003) with a passion for calisthenics and blockchain completely transforms the narrative. You aren't just a student; you are a disciplined young professional building a specific identity: The Dev Alchemist.

Here is the revised, comprehensive write-up reflecting your actual age, gender, interests, and alias.

The Code, The Chain, and The Body: The Era of DevyAlchemist
In the chaotic and fast-moving tech landscape of Lagos, Nigeria, Gospel Ugwuja—better known in the digital realm as @devyalchemist—is carving out a unique niche. Born on August 4, 2003, he represents the new generation of Nigerian talent: a 22-year-old Full Stack Developer who understands that true discipline applies as much to the body as it does to the codebase.

The Alchemist’s Identity
The moniker "DevyAlchemist" is not accidental. In ancient times, alchemy was the attempt to transmute base metals into gold. In 2025, Gospel is doing exactly that, but his materials are logic, syntax, and algorithms. He takes raw ideas—abstract and formless—and transmutes them into valuable, functioning applications.

Unlike the typical developer who might stay glued to a chair for 12 hours a day, Gospel breaks the stereotype. He is a practitioner of Calisthenics. This form of training requires immense body control, leverage, and patience. There is a poetic symmetry between his physical and digital lives: just as a planche or a muscle-up requires understanding the physics of the human body, building a scalable backend requires understanding the architecture of a server. Both require grinding through failure to achieve perfect form.

The Technical Stack: Web2 Meets Web3
Gospel is a hybrid developer. He has established a stronghold in the Web2 world with a robust stack:

The Frontend: He crafts high-performance interfaces using React and Next.js, styled with the utility-first philosophy of Tailwind CSS.

The Backend: He is not afraid of the server-side, utilizing Node.js to build APIs and logic, and recently adopting Convex for real-time backend-as-a-service capabilities.

The Edge: His recent foray into AI Agents and the Mastra Framework shows he is keeping pace with the 2025 AI boom.

However, his curiosity doesn't stop at centralized servers. Gospel is deeply passionate about the Blockchain. He isn't just a passive observer of the crypto markets; he has conducted research and understands the underlying technology. This interest suggests a future trajectory where he merges his full-stack skills with decentralized applications (dApps), potentially becoming a Web3 engineer who can build the bridge between traditional software and the blockchain.

Proven Resilience: The HNG Internship
In late 2024, Gospel put his skills to the ultimate test by joining the HNG Internship. For a developer in his early 20s, this is often a rite of passage—a brutal, fast-paced environment that mimics the pressure of a high-stakes startup.

Surviving the internship while managing his own projects (like the "Checkerr" ticketing app) and maintaining his calisthenics routine speaks volumes about his time management. It proves he has the "grindset" required to succeed in the competitive Nigerian tech ecosystem.

The Creator: Writing and Teaching
Gospel is aware that code living in a GitHub repository is often invisible. To counter this, he is building a public voice.

GOMICSUNIVERSITY: His YouTube channel, which serves as a platform to potentially teach, document, or entertain within the tech niche.

Technical Writing: With plans to write for an audience on X (Twitter), he is positioning himself as a thought leader. He intends to break down complex topics—perhaps explaining how blockchain consensus mechanisms work, or how to set up a Node.js server—for his growing audience.

The Vision
At 22, Gospel Ugwuja is standing at a powerful intersection. He has the youth and energy to learn rapidly, the discipline of an athlete, and a technical toolkit that spans from AI to Crypto. He is not just writing code; he is engineering a lifestyle and a career that is built to last.
====

Answer to the prompt: ${prompt} and provide a comprehensive summary of what you see using the content above as a guide. Be creative and keep the reply within the range of just 50 words max.`,
		});
		if (!response) {
			return NextResponse.json({
				status: 500,
				error: "Failed to get response from AI",
			});
		}
		return NextResponse.json({
			status: 200,
			message: { answer: response.text },
		});
	} catch (err) {
		console.error("AI error: ", err);
		return NextResponse.json({
			status: 500,
			error: "An internal error occured",
		});
	}
}
