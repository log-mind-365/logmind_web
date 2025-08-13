import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "로그마인드 | LogMind",
	description:
		"AI 기반 감정 분석 솔루션을 제공하는 혁신적인 기술 회사 로그마인드입니다.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				style={{
					fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'
				}}
			>
				{children}
			</body>
		</html>
	);
}
