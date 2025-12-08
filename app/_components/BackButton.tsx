"use client";
import { Button } from "@/components/ui/button";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
	const router = useRouter();
	return (
		<Button
			onClick={() => router.back()}
			className="aspect-square w-8 absolute top-5 left-5">
			<FontAwesomeIcon icon={faArrowLeft} />
		</Button>
	);
};

export default BackButton;
