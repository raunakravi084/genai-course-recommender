export function LoadingSkeleton() {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{[1, 2, 3, 4, 5, 6].map((i) => (
				<div key={i} className="card rounded-xl p-6">
					<div className="h-6 bg-slate-200/70 rounded w-3/4 mb-3"></div>
					<div className="h-4 bg-slate-100/70 rounded w-full mb-2"></div>
					<div className="h-4 bg-slate-100/70 rounded w-5/6 mb-4"></div>
					<div className="flex gap-2">
						<div className="h-6 bg-slate-200/70 rounded w-16"></div>
						<div className="h-6 bg-slate-200/70 rounded w-20"></div>
					</div>
				</div>
			))}
		</div>
	);
}

