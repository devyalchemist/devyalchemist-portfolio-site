"use client";
import React from "react";

interface CircularProgressProps {
	size?: number; // diameter of circle
	strokeWidth?: number;
	percentage: number; // 0 - 100
	trackColor?: string; // background ring color
	progressColor?: string; // filled ring color
}

const CircularProgress: React.FC<CircularProgressProps> = ({
	size = 120,
	strokeWidth = 10,
	percentage,
	trackColor = "#e9ecef",
	progressColor = "#f39b6d",
}) => {
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (percentage / 100) * circumference;

	return (
		<svg width={size} height={size} className="rotate-[-90deg]">
			{/* Track Circle */}
			<circle
				cx={size / 2}
				cy={size / 2}
				r={radius}
				stroke={trackColor}
				strokeWidth={strokeWidth}
				fill="none"
			/>
			{/* Progress Circle */}
			<circle
				cx={size / 2}
				cy={size / 2}
				r={radius}
				stroke={progressColor}
				strokeWidth={strokeWidth}
				fill="none"
				strokeDasharray={circumference}
				strokeDashoffset={offset}
				strokeLinecap="round"
				className="transition-all duration-500 ease-out"
			/>
			{/* Percentage Text */}
			<text
				x="50%"
				y="50%"
				textAnchor="middle"
				dy=".3em"
				className="text-lg font-semibold fill-foreground">
				{percentage}%
			</text>
		</svg>
	);
};

export default CircularProgress;
