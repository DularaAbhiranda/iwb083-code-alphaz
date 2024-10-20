import "./globals.css";
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'], weight: ['100', '300', '400', '700'] })

export const metadata = {
	title: "Spark Chat",
	description: "Real-Time Chat Application",
	icons: {
		icon: "/icons/favicon.ico",
		shortcut: "/icons/favicon.png",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" encoding="UTF-8">

			<body className={`${lato.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
