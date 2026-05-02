import { Navbar } from "../../../components/Navbar";
import { RecommendationList } from "../../../components/RecommendationList";
import { getRecommendations, getUsers } from "../../../lib/api";

export default async function UserRecommendations({ params }: { params: { id: string } }) {
	const userId = Number(params.id);
	const [users, recs] = await Promise.all([getUsers().catch(() => []), getRecommendations(userId).catch(() => null)]);
	const user = users.find((u: any) => u.id === userId);

	return (
		<div>
			<Navbar />
			<div className="max-w-6xl mx-auto px-6">
				<div className="mb-8">
					{user && (
						<div className="flex items-center gap-4 mb-6">
							<div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center text-white font-bold text-2xl shadow-lg">
								{user.name?.charAt(0).toUpperCase()}
							</div>
							<div>
								<h1 className="text-4xl font-bold text-brand">
									Recommendations
								</h1>
								<p className="text-slate-600 text-lg mt-1">for {user.name}</p>
							</div>
						</div>
					)}
					{!user && (
						<h1 className="text-4xl font-bold text-brand mb-3">Recommendations</h1>
					)}
				</div>
				<RecommendationList data={recs?.recommendations || []} />
			</div>
		</div>
	);
}


