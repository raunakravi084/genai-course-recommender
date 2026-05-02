import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { getUsers } from "../../lib/api";
import { LoadingSkeleton } from "../../components/LoadingSkeleton";

export default async function UsersPage() {
	const users = await getUsers().catch(() => []);
	return (
		<div>
			<Navbar />
			<div className="max-w-6xl mx-auto px-6">
				<div className="mb-8">
					<h1 className="text-4xl font-bold text-brand mb-3">Users</h1>
					<p className="text-slate-600">Discover our community and their personalized recommendations</p>
				</div>
				{!users?.length ? (
					<LoadingSkeleton />
				) : (
				<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{users.map((u: any) => (
						<li 
							key={u.id} 
							className="card card-hover rounded-xl p-6"
						>
							<div className="flex items-center gap-4 mb-4">
								<div className="w-14 h-14 rounded-full bg-brand flex items-center justify-center text-white font-bold text-xl shadow-md">
									{u.name?.charAt(0).toUpperCase()}
								</div>
								<div className="flex-1">
									<div className="font-bold text-lg text-slate-900">
										{u.name}
									</div>
									<div className="text-slate-600 text-sm">{u.email}</div>
								</div>
							</div>
							<Link 
								className="inline-flex items-center gap-2 text-brand font-semibold hover:text-teal" 
								href={`/users/${u.id}`}
							>
								<span>View recommendations</span>
								<span>→</span>
							</Link>
						</li>
					))}
				</ul>
				)}
			</div>
		</div>
	);
}


