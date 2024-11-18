import React from 'react';
import { Timer, Route, UsersRound } from "lucide-react";

const AboutUsContact = () => {
    return (
        <section className="bg-[#1b1b1b] text-white" id='about'>
            {/* About Us Section */}
            <section className="bg-black-50 py-16">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-4xl font-bold text-center text-white-800 mb-8">About Us</h2>
                    <p className="text-lg text-center text-white-600 max-w-3xl mx-auto mb-12">
                        Destino is your ultimate public transportation companion, designed to make commuting seamless and efficient.
                        Our platform provides real-time tracking and detailed route information for buses, trains, and angkots, empowering users to navigate the city with ease.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-neutral-800 shadow-lg rounded-lg p-6 text-center">
                            <div className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center mx-auto rounded-full mb-4">
                                <Timer />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Real-Time Tracking</h3>
                            <p className="text-white">
                                Track buses, trains, and angkots in real time to plan your journey efficiently.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-neutral-800 shadow-lg rounded-lg p-6 text-center">
                            <div className="bg-green-500 text-white w-16 h-16 flex items-center justify-center mx-auto rounded-full mb-4">
                                <Route />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Route Information</h3>
                            <p className="text-white">
                                Get detailed route information to ensure you never miss your destination.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-neutral-800 shadow-lg rounded-lg p-6 text-center">
                            <div className="bg-yellow-500 text-white w-16 h-16 flex items-center justify-center mx-auto rounded-full mb-4">
                                <UsersRound />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Community Driven</h3>
                            <p className="text-white">
                                Powered by feedback from our users, we continually improve to serve you better.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default AboutUsContact;