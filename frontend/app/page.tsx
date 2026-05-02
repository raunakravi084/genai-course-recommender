import Link from "next/link";
import { Navbar } from "../components/Navbar";

export default function HomePage() {
	return (
		<div>
			<Navbar />
			<section className="max-w-6xl mx-auto px-6">
				<div className="text-center mb-16">
					<h1 className="text-5xl font-bold text-brand mb-4">
						Welcome to Recs Dashboard
					</h1>
					<p className="text-slate-600 text-lg max-w-2xl mx-auto">
						Discover personalized recommendations powered by AI. Explore users, courses, and experiments with our modern, intuitive interface.
					</p>
				</div>
				
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<Link href="/users" className="card card-hover rounded-xl p-8">
						<div className="text-4xl mb-4">👥</div>
						<div className="text-2xl font-bold text-slate-900 mb-2">
							Users
						</div>
						<p className="text-slate-600 leading-relaxed">
							Browse user profiles and view personalized recommendations tailored to their interests.
						</p>
					</Link>
					
					<Link href="/items" className="card card-hover rounded-xl p-8">
						<div className="text-4xl mb-4">📚</div>
						<div className="text-2xl font-bold text-slate-900 mb-2">
							Courses
						</div>
						<p className="text-slate-600 leading-relaxed">
							Explore our comprehensive course catalog with various topics and difficulty levels.
						</p>
					</Link>
					
					<Link href="/abtest" className="card card-hover rounded-xl p-8">
						<div className="text-4xl mb-4">🧪</div>
						<div className="text-2xl font-bold text-slate-900 mb-2">
							Experiments
						</div>
						<p className="text-slate-600 leading-relaxed">
							Monitor A/B testing results and optimize recommendation strategies.
						</p>
					</Link>
				</div>
			</section>
		</div>
	);
}


