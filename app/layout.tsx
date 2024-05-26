import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar, Footer, MainLoader } from "@/components";
import clsx from "clsx";
import { Suspense } from "react";

export const revalidate = Number(process.env.REVALIDATE_INTERVAL) || 3600;

export const metadata: Metadata = {
	title: "FreeGamesHub: Your Gateway to Free PC and Browser Gaming",
	description:
		"Explore a world of free PC games and browser-based fun at FreeGamesHub. Download exciting titles and play online without any cost. Your go-to destination for endless gaming enjoyment!",
	keywords:
		"Free PC games, Downloadable games, Browser gaming, Free-to-play, Online gaming, Indie games, Gaming community, free download pc games, lifetime free pc games",
	openGraph: {
		siteName: "FreeGamesHub",
		type: "website",
		locale: "en_US",
		title: "FreeGamesHub: Your Gateway to Free PC and Browser Gaming",
		description:
			"Explore a world of free PC games and browser-based fun at FreeGamesHub. Download exciting titles and play online without any cost. Your go-to destination for endless gaming enjoyment!",
	},
	robots:
		"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<Suspense fallback={<MainLoader />}>
						{/* @ts-ignore @ts-expect-error Async Server Component */}
						<Navbar />
						<main className="flex-grow">{children}</main>
						{/* @ts-ignore @ts-expect-error Async Server Component */}
						<Footer />
					</Suspense>
				</Providers>
			</body>
		</html>
	);
}
