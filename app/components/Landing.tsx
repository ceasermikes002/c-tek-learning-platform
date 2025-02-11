"use client";
import React from 'react';
import Link from 'next/link';
import Reviews from './Reviews';
import Hero from './Hero';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BackgroundGradient } from '@/components/ui/background-gradient';

const Landing = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow bg-white text-[#1c1b1b]">
                {/* Hero */}
                <Hero />
                <section className="bg-white py-24 px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.div
                            className="mb-16"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                Explore some of our courses, choose your path and start your journey in software development
                            </p>
                        </motion.div>
                        <div className="grid md:grid-cols-3 gap-10">
                            {[
                                {
                                    title: "Frontend Development",
                                    description:
                                        "Learn HTML, CSS, JavaScript, and latest frameworks like Next.js to build stunning user interfaces.",
                                    link: "/courses/frontend",
                                },
                                {
                                    title: "Backend Development",
                                    description:
                                        "Master Node.js, Python, and database management to create powerful backends.",
                                    link: "/courses/backend",
                                },
                                {
                                    title: "Fullstack Development",
                                    description:
                                        "Get a comprehensive understanding of both frontend and backend development.",
                                    link: "/courses/fullstack",
                                },
                            ].map((course, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                >
                                    <BackgroundGradient className="rounded-[22px] p-1">
                                        <div className="bg-gray-100 text-black dark:bg-zinc-900 rounded-[20px] p-8 space-y-4">
                                            <h3 className="text-2xl font-bold mb-4 text-black">{course.title}</h3>
                                            <p className="text-black mb-6 leading-relaxed">{course.description}</p>
                                            <Link
                                                href={course.link}
                                                className="inline-flex items-center px-6 py-3 rounded-full bg-[#f79920] text-white font-semibold hover:bg-[#e0891c] transition-colors"
                                            >
                                                Learn More
                                                <ArrowRight className="ml-2 w-5 h-5" />
                                            </Link>
                                        </div>
                                    </BackgroundGradient>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                <Reviews />
                {/* Call to Action Section */}
                <section className="bg-[#024341] text-[#fffbf0] py-16 px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Ready to Start Your Journey?
                        </motion.h2>
                        <motion.p
                            className="text-lg md:text-xl mb-8"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            Join our courses and become part of our learning community today!
                        </motion.p>
                        <Link href="/sign-up">
                            <p className="bg-[#1c1b1b] text-white px-6 py-3 rounded-full font-semibold inline-block hover:bg-[#f79920]  transition-colors">
                                Sign Up Now
                            </p>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Landing;
