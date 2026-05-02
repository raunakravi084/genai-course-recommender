export function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
	const sizeClasses = {
		sm: "w-8 h-8 border-2",
		md: "w-12 h-12 border-3",
		lg: "w-16 h-16 border-4"
	};

	return (
		<div className="flex items-center justify-center py-8">
			<div className={`${sizeClasses[size]} border-slate-200 border-t-brand rounded-full animate-spin`}></div>
		</div>
	);
}

export function LoadingCard() {
	return (
		<div className="card rounded-lg p-6">
			<div className="h-6 bg-slate-200 rounded w-3/4 mb-3"></div>
			<div className="h-4 bg-slate-100 rounded w-full mb-2"></div>
			<div className="h-4 bg-slate-100 rounded w-5/6"></div>
		</div>
	);
}

