export default function Loading() {
	return (
		<div className="min-h-screen max-w-5xl mx-auto px-4 py-8 animate-pulse">
			<div className="h-6 w-32 bg-gray-200 dark:bg-gray-800 rounded mb-8" />
			<div className="h-[280px] sm:h-[400px] w-full bg-gray-200 dark:bg-gray-800 rounded-2xl mb-8" />
			<div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
				<div className="space-y-4">
					<div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-800 rounded" />
					<div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-800 rounded mb-6" />
					<div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded" />
					<div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded" />
					<div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded" />
					<div className="h-32 w-full bg-gray-200 dark:bg-gray-800 rounded-xl my-6" />
					<div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded" />
					<div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-800 rounded" />
				</div>
				<div className="hidden lg:block space-y-6">
					<div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-2xl" />
					<div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-2xl" />
				</div>
			</div>
		</div>
	);
}
