type Props = { course: any };

export function CourseCard({ course }: Props) {
	return (
		<div className="card card-hover rounded-xl p-6">
			<div className="flex items-start justify-between mb-3">
				<h3 className="text-xl font-bold text-slate-900">
					{course.title}
				</h3>
				<span className="px-3 py-1 rounded-lg text-xs font-bold bg-brand text-white shadow-sm">
					{course.difficulty}
				</span>
			</div>
			<p className="text-slate-600 leading-relaxed mb-4">{course.description}</p>
			<div className="flex flex-wrap gap-2">
				{(course.tags || []).map((t: string) => (
					<span 
						key={t} 
						className="text-xs px-3 py-1.5 rounded-lg bg-white/60 border-2 border-slate-200 text-slate-700 font-medium backdrop-blur-sm"
					>
						{t}
					</span>
				))}
			</div>
		</div>
	);
}

