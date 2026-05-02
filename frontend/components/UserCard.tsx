type Props = { user: any };

export function UserCard({ user }: Props) {
	return (
		<div className="card card-hover rounded-xl p-6">
			<div className="flex items-center gap-4 mb-3">
				<div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white font-bold text-lg shadow-md">
					{user.name?.charAt(0).toUpperCase()}
				</div>
				<div className="flex-1">
					<div className="font-bold text-lg text-slate-900">
						{user.name}
					</div>
					<div className="text-slate-600 text-sm">{user.email}</div>
				</div>
			</div>
			{user.summary && (
				<p className="text-slate-600 leading-relaxed mt-3 pt-3 border-t-2 border-slate-200">
					{user.summary}
				</p>
			)}
		</div>
	);
}

