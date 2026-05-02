import { Navbar } from "../../../components/Navbar";
import { LoadingSpinner } from "../../../components/LoadingSpinner";

export default function Loading() {
	return (
		<div>
			<Navbar />
			<div className="max-w-6xl mx-auto px-6">
				<div className="mb-8">
					<div className="h-12 w-64 bg-slate-200/70 rounded mb-2" />
					<div className="h-6 w-48 bg-slate-100/70 rounded" />
				</div>
				
				<div className="mt-8 space-y-6">
					<div className="flex flex-col items-center justify-center py-12 card rounded-xl">
						<div className="relative mb-6">
							<div className="w-20 h-20 border-4 border-slate-200 border-t-brand rounded-full animate-spin" />
						</div>
						
						<div className="text-center">
							<div className="text-slate-900 font-bold text-xl mb-2">
								Generating personalized recommendations
							</div>
							<div className="text-slate-600">
								Analyzing user preferences and finding the best matches...
							</div>
						</div>
					</div>
					
					{/* Skeleton cards */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
						{[1, 2, 3, 4, 5, 6].map((i) => (
							<div 
								key={i} 
								className="card rounded-xl p-6"
							>
								<div className="flex justify-between items-start mb-3">
									<div className="h-6 bg-slate-200/70 rounded w-3/4" />
									<div className="h-6 w-12 bg-slate-200/70 rounded" />
								</div>
								<div className="h-4 bg-slate-100/70 rounded w-full mb-2" />
								<div className="h-4 bg-slate-100/70 rounded w-5/6 mb-4" />
								<div className="flex gap-2 mt-4">
									<div className="h-6 bg-slate-200/70 rounded w-16" />
									<div className="h-6 bg-slate-200/70 rounded w-20" />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

