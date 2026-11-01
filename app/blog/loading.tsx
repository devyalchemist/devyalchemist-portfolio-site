export default function BlogLoading() {
	return (
		<div className="min-h-screen pb-20">
			{/* Hero skeleton */}
			<div className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-16 px-4">
				<div className="max-w-6xl mx-auto space-y-4">
					<div className="h-8 w-48 bg-gray-800 rounded animate-pulse" />
					<div className="h-4 w-96 bg-gray-800 rounded animate-pulse" />
					<div className="h-10 w-full max-w-md bg-gray-800 rounded-xl mt-6 animate-pulse" />
				</div>
			</div>

			{/* Cards grid skeleton */}
			<div className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{[1, 2, 3, 4, 5, 6].map((i) => (
					<div
						key={i}
						className="border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden bg-white/50 dark:bg-zinc-900/50 p-4 space-y-4 animate-pulse">
						<div className="h-44 bg-gray-200 dark:bg-gray-800 rounded-xl" />
						<div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded-full" />
						<div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-800 rounded" />
						<div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded" />
						<div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded" />
						<div className="pt-4 border-t border-black/5 dark:border-white/5 flex justify-between items-center">
							<div className="h-4 w-20 bg-gray-200 dark:bg-gray-800 rounded" />
							<div className="h-4 w-16 bg-gray-200 dark:bg-gray-800 rounded" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
