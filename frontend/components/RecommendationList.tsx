type Props = { data: any[] };

export function RecommendationList({ data }: Props) {
	if (!data?.length) {
		return (
			<div className="card rounded-xl p-12 text-center">
				<div className="text-6xl mb-4">📚</div>
				<p className="text-slate-700 text-lg font-semibold">No recommendations yet.</p>
				<p className="text-slate-500 text-sm mt-2">Check back soon for personalized suggestions!</p>
			</div>
		);
	}
	return (
		<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{data.map((r: any, idx: number) => (
				<li 
					key={idx} 
					className="card card-hover rounded-xl p-6"
				>
					<div className="flex items-start justify-between mb-3">
						<h3 className="text-xl font-bold text-slate-900 flex-1">
							{r.item?.title || r.title}
						</h3>
						<div className="ml-3 px-3 py-1 rounded-lg text-xs font-bold bg-teal text-white whitespace-nowrap shadow-sm">
							{(r.score ?? 0).toFixed(2)}
						</div>
					</div>
					<p className="text-slate-600 leading-relaxed mb-4">
						{r.item?.description || r.description}
					</p>
					{r.explanation && (
						<div className="pt-4 border-t-2 border-slate-200">
							<p className="text-sm text-slate-600">{r.explanation}</p>
						</div>
					)}
				</li>
			))}
		</ul>
	);
}

