"use client";
import { useEffect, useRef, useState } from "react";

interface FadeOnScrollProps {
	children: React.ReactNode;
	className?: string;
}

export default function FadeOnScroll({
	children,
	className = "",
}: FadeOnScrollProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{
				threshold: 0.2, // 10% of element visible triggers fade
			}
		);

		observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	}, []);

	return (
		<div
			ref={ref}
			className={`${className} transition-opacity duration-1800 ease-in-out ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}>
			{children}
		</div>
	);
}
