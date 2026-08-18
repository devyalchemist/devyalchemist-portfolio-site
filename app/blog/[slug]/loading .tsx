import { Spinner } from "@/components/ui/spinner";
    
const loading = () => {
	return (
		<div className="middle flex-col gap-y-4">
			<Spinner /> <p>Loading Blog Content</p>{" "}
		</div>
	);
};

export default loading;
