"use client";

import React, { useState } from "react";

const Footer: React.FC = () => {
	const [email, setEmail] = useState("");

	const handleSubscribe = () => {
		if (!email) return alert("Please enter your email");
		// You can integrate your subscription logic here
		alert(`Subscribed with ${email}`);
		setEmail("");
	};

	return (
		<footer className="bg-gray-900 text-white py-8 px-4">
			<div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
				{/* Logo / Branding */}
				<div className="text-xl font-bold">devyalchemist</div>

				{/* Email subscription */}
				<div className="flex w-full sm:w-auto gap-2">
					<input
						type="email"
						placeholder="Enter your email"
						className="flex-1 px-4 py-2 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-400"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<button
						className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
						onClick={handleSubscribe}>
						Subscribe
					</button>
				</div>
			</div>

			{/* Footer links / copyright */}
			<div className="mt-6 text-sm text-gray-400 text-center">
				© {new Date().getFullYear()} devyalchemist. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
