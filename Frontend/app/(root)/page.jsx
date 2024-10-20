"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { handleServerSignup, handleServerAuthorization, WebSocketClient } from '@/server';

export default function Home() {
	const router = useRouter();
	handleServerAuthorization();

	const handleNavigate = async () => {
		const client = new WebSocketClient();
		//client.syncMessages();
		router.push('/sign-in');
	};

	return (
		<div
			className="flex justify-center items-center h-screen bg-cover bg-center"

		>
			<div className="flex items-center space-x-8 bg-white bg-opacity-70 p-8 rounded-lg">
				<div className="flex justify-center">
					<Image
						src="/images/App Logo.png"
						alt="SparkChat Logo"
						width={128}
						height={128}
						className="w-32 h-32"
					/>
				</div>

				<div className="text-left">

					<h1
						className="text-4xl font-bold mb-2"
						style={{ color: '#433878' }}
					>
						SparkChat
					</h1>

					<p className="text-gray-600 mb-4 max-w-md">
					Ignite your conversations. Fast, simple, and seamless messaging that connects you instantly!
					</p>

					<button
						className="text-white py-2 px-6 rounded-lg transition-all duration-300 ease-in-out"
						style={{ backgroundColor: '#433878' }}
						onClick={handleNavigate}
					>
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
}
