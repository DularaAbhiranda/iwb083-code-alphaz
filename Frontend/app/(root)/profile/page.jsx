"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Profile = () => {
    const router = useRouter();

    // Use state for managing input fields
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");

    const handleLogout = () => {
        router.push('/sign-in');
    };

    const handlechat = () => {
        router.push('/loadingchat');
    };

    const handleEdit = () => {
        console.log("Edit action triggered");
    };

    const handleUpload = () => {
        console.log("Upload action triggered");
    };

    // Function to handle resetting input fields
    const handleReset = () => {
        setDisplayName("");
        setEmail("");
    };

    return (
        <div className="flex h-screen">
            <div className="bg-purple-700 text-white w-1/5 flex flex-col items-center py-8">
                <div className="mb-6">
                    <Image
                        src="/images/App Logo.png"
                        alt="Profile Icon"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="text-xl mb-8">Profile</div>

                <div className="mt-auto mb-6">
                    <button onClick={handleLogout} className="focus:outline-none">
                        <Image
                            src="/images/logout.png"
                            alt="Logout Icon"
                            width={45}
                            height={45}
                        />
                    </button>
                </div>
                <div className="text-xl">Logout</div>
            </div>

            <div className="flex-grow flex">
                <div className="w-1/2 p-10">
                    <h1 className="text-3xl font-bold text-customPurple mb-6">Profile</h1>

                    <div className="relative w-24 h-24 mb-6">
                        <div className="bg-gray-200 w-full h-full rounded-full flex justify-center items-center text-4xl text-blue-500">
                            E
                        </div>
                        <button onClick={handleUpload} className="absolute right-0 bottom-0 bg-white p-1 rounded-full focus:outline-none">
                            <Image
                                src="/images/camera.png"
                                alt="Upload Profile"
                                width={20}
                                height={20}
                            />
                        </button>
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg text-customPurple">Display name</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={displayName} // Bind state to input
                                onChange={(e) => setDisplayName(e.target.value)} // Update state on change
                                placeholder="Enter Name Here"
                                className="mt-2 w-full p-4 border border-gray-300 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-500"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg text-customPurple">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                value={email} // Bind state to input
                                onChange={(e) => setEmail(e.target.value)} // Update state on change
                                placeholder="Enter Email Here"
                                className="mt-2 w-full p-4 border border-gray-300 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-500"
                            />
                            <button onClick={handleEdit} className="absolute right-4 top-1/2 transform -translate-y-1/2 focus:outline-none">
                                <Image
                                    src="/images/editing.png"
                                    alt="Edit Email"
                                    width={20}
                                    height={20}
                                />
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <button onClick={handlechat} className="bg-customPurple text-white px-6 py-2 rounded-full">
                            Save Changes
                        </button>
                        <button onClick={handleReset} className="border border-customPurple text-customPurple px-6 py-2 rounded-full">
                            Reset Changes
                        </button>
                    </div>
                </div>

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
            </div>
        </div>
    );
};

export default Profile;
