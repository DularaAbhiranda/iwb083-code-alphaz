
"use client";

import React from 'react';
import Image from 'next/image';

export default function SparkChatIntro() {
	return (
		<div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-10">
			<Image 
				src="/images/App Logo.png" 
				alt="SparkChat Logo" 
				width={200} 
				height={200} 
			/>
			
			<h2 className="mt-4 text-4xl font-bold text-customPurple">SparkChat</h2>
			
			<p className="mt-2 text-xl text-purple-500">Chat, Connect, Spark!</p>
			
			<p className="mt-6 text-xl text-gray-500 text-center">
				Ignite your conversations. Fast, simple, and seamless messaging that connects you instantly!
			</p>
		</div>
	);
}
