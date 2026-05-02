import { Navbar } from "../../components/Navbar";
import { getAbTestSummary } from "../../lib/api";

export default async function AbTestPage() {
	const summary = await getAbTestSummary().catch(() => null as any);
	const variants = summary?.variants || {};
	const a = variants["A"] || {};
	const b = variants["B"] || {};

	function pct(n: number) {
		if (!n || !isFinite(n)) return "0%";
		return `${(n * 100).toFixed(1)}%`;
	}

	const aRate = a.enroll_rate_per_exposure ?? 0;
	const bRate = b.enroll_rate_per_exposure ?? 0;
	const aBar = Math.max(0, Math.min(100, (aRate || 0) * 100));
	const bBar = Math.max(0, Math.min(100, (bRate || 0) * 100));
	return (
		<div>
			<Navbar />
			<div className="max-w-6xl mx-auto px-6">
				<div className="mb-8">
					<h1 className="text-4xl font-bold text-brand mb-3">Experiment Dashboard</h1>
					<p className="text-slate-600">Monitor and optimize your A/B testing strategies</p>
				</div>
				
			<div className="card rounded-xl p-8 mb-6">
				<div className="flex items-center gap-3 mb-6">
					<span className="text-3xl">🧪</span>
					<h2 className="text-2xl font-bold text-slate-900">Active Experiments</h2>
				</div>
				<p className="text-slate-600 mb-6">
					Track A/B test assignments and outcomes to optimize recommendation strategies
				</p>
				
				<div className="grid sm:grid-cols-3 gap-6">
					<div className="card rounded-xl p-6 border-2 border-slate-300">
						<div className="flex items-center gap-2 mb-3">
							<span className="text-2xl">📊</span>
							<div className="font-bold text-slate-700">Active Tests</div>
						</div>
						<div className="text-5xl font-bold text-brand mb-2">{summary?.totals?.active_tests ?? 0}</div>
						<div className="text-sm text-slate-600">Currently running</div>
					</div>
					
					<div className="card rounded-xl p-6 border-2 border-slate-300">
						<div className="flex items-center gap-2 mb-3">
							<span className="text-2xl">📈</span>
							<div className="font-bold text-slate-700">Variant A CTR</div>
						</div>
						<div className="text-5xl font-bold text-teal mb-2">
							{pct(aRate)}
						</div>
						<div className="text-sm text-slate-600">Exposures: {a.exposures ?? 0} • Users: {a.unique_users ?? 0}</div>
					</div>
					
					<div className="card rounded-xl p-6 border-2 border-slate-300">
						<div className="flex items-center gap-2 mb-3">
							<span className="text-2xl">📈</span>
							<div className="font-bold text-slate-700">Variant B CTR</div>
						</div>
						<div className="text-5xl font-bold text-teal mb-2">
							{pct(bRate)}
						</div>
						<div className="text-sm text-slate-600">Exposures: {b.exposures ?? 0} • Users: {b.unique_users ?? 0}</div>
					</div>
				</div>
			</div>

			<div className="grid md:grid-cols-2 gap-6">
				<div className="card rounded-xl p-6">
					<h3 className="text-xl font-bold text-slate-900 mb-4">📊 Test Performance</h3>
					<div className="space-y-3">
						<div>
							<div className="flex justify-between text-sm mb-1">
								<span className="text-slate-700 font-medium">Variant A</span>
								<span className="text-slate-600">{pct(aRate)}</span>
							</div>
							<div className="h-3 bg-slate-200 rounded-full overflow-hidden border-2 border-slate-300">
								<div className="h-full bg-brand rounded-full" style={{ width: `${aBar}%` }}></div>
							</div>
						</div>
						<div>
							<div className="flex justify-between text-sm mb-1">
								<span className="text-slate-700 font-medium">Variant B</span>
								<span className="text-slate-600">{pct(bRate)}</span>
							</div>
							<div className="h-3 bg-slate-200 rounded-full overflow-hidden border-2 border-slate-300">
								<div className="h-full bg-teal rounded-full" style={{ width: `${bBar}%` }}></div>
							</div>
						</div>
					</div>
				</div>

				<div className="card rounded-xl p-6">
					<h3 className="text-xl font-bold text-slate-900 mb-4">🎯 Success Metrics</h3>
					<div className="space-y-4">
						<div className="flex justify-between items-center pb-3 border-b-2 border-slate-200">
							<span className="text-slate-700">Sample Size</span>
							<span className="font-bold text-slate-900">{(a.unique_users ?? 0) + (b.unique_users ?? 0)} users</span>
						</div>
						<div className="flex justify-between items-center pb-3 border-b-2 border-slate-200">
							<span className="text-slate-700">Confidence Level</span>
							<span className="font-bold text-teal">95%</span>
						</div>
						<div className="flex justify-between items-center">
							<span className="text-slate-700">Statistical Significance</span>
							<span className="font-bold text-teal">—</span>
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
	);
}


