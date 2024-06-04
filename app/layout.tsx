import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar, Footer, MainLoader } from "@/components";
import clsx from "clsx";
import { Suspense } from "react";
import { getGames } from "@/lib/action";
import { IGame } from "@/lib/types";
import { getCategories } from "@/lib/utils";
import { currentSiteUrl, portfolioUrl, googleAnalyticsId } from "@/lib/env";
import { GoogleAnalytics } from '@next/third-parties/google'

export const revalidate = Number(process.env.REVALIDATE_INTERVAL) || 3600;

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_CURRENT_SITE_URL as string),
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
	alternates: {
		canonical: new URL(currentSiteUrl),
	},
	applicationName: "FreeGamesHub",
	authors: {
		name: "Abhishek Bhardwaj",
		url: new URL(portfolioUrl),
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const games: IGame[] = await getGames();

	const pcCategories = getCategories(games, "pc");
	const browserCategories = getCategories(games, "browser");

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
						<Navbar
							pcCategories={pcCategories}
							browserCategories={browserCategories}
							games={games}
						/>
						<main>{children}</main>
						{/* @ts-ignore @ts-expect-error Async Server Component */}
						<Footer />
					</Suspense>
				</Providers>
				<GoogleAnalytics gaId={googleAnalyticsId} />
			</body>
		</html>
	);
}
