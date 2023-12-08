import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { GlobalStyles } from "./GlobalStyles";
import StyledComponentsRegistry from "../lib/registry";

export const metadata: Metadata = {
	title: "Secret Santa",
	description: "Advent of code 2023",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<StyledComponentsRegistry>
				<GlobalStyles />
				<body className={inter.className}>{children}</body>
			</StyledComponentsRegistry>
		</html>
	);
}
