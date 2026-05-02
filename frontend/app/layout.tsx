import "./globals.css";
import React from "react";

export const metadata = {
	title: "Recs Dashboard - AI-Powered Recommendations",
	description: "Modern, intuitive interface for personalized AI recommendations"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="min-h-screen bg-slate-50">
				{children}
			</body>
		</html>
	);
}


