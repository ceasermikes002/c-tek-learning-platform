// components/CoursesPage.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Boxes } from '@/components/ui/background-boxes';
import { ArrowRight, BookOpen } from 'lucide-react';
import coursesData from '@/data/coursesData';
import { BackgroundGradient } from '@/components/ui/background-gradient';

const CoursesPage = () => {
  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      {/* Banner Section */}
      <header className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <Boxes />
        </div>
        <div className="relative max-w-7xl mx-auto text-center px-6 z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore Our Courses
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-10 text-neutral-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose from a variety of courses designed to build your skills in tech. Whether you&apos;re starting out or looking to advance, we have the perfect course for you.
          </motion.p>
          <Link href="/sign-up">
            <motion.button
              className="bg-[#f79920] text-[#1c1b1b] px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2 hover:bg-white hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -3 }}
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </header>

      {/* Enhanced Courses Section */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-[#1c1b1b] mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Courses
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <BackgroundGradient className="rounded-[22px] p-1 bg-white dark:bg-zinc-900">
                <div className="bg-white dark:bg-zinc-900 rounded-[20px] p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-[#f79920] bg-opacity-10 rounded-xl">
                      <BookOpen className="w-6 h-6 text-[#f79920]" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1c1b1b] group-hover:text-[#f79920] transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 line-clamp-3">
                    {course.description}
                  </p>

                  <Link href={`/courses/${course.id}`}>
                    <div className="mt-4 group flex items-center justify-between">
                      <span className="text-[#f79920] font-semibold">
                        Learn More
                      </span>
                      <ArrowRight className="w-5 h-5 text-[#f79920] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#1c1b1b] to-[#2d2d2d] text-white py-24">
        <div className="max-w-7xl mx-auto text-center px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Start Your Learning Journey?
          </motion.h2>
          <motion.p
            className="text-xl mb-10 text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join our courses today and take your skills to the next level. Become part of our learning community and start building your future.
          </motion.p>
          <Link href="/sign-up">
            <motion.button
              className="bg-[#f79920] text-[#1c1b1b] px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2 hover:bg-white transform transition-all duration-300 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              Sign Up Now <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
