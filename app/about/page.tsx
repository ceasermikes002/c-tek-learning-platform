"use client";

import { motion } from 'framer-motion';
import { Boxes } from '@/components/ui/background-boxes';
import { 
  GraduationCap, 
  Users, 
  Target, 
  Award,
  BookOpen,
  Globe,
  Clock,
  CheckCircle 
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const stats = [
  { number: "1000+", label: "Students Taught", icon: Users },
  { number: "50+", label: "Expert Mentors", icon: GraduationCap },
  { number: "95%", label: "Success Rate", icon: Target },
  { number: "20+", label: "Tech Courses", icon: BookOpen },
];

const values = [
  {
    title: "Excellence in Education",
    description: "We strive to provide the highest quality tech education through experienced mentors and industry-relevant curriculum.",
    icon: Award,
  },
  {
    title: "Global Reach",
    description: "Our platform connects learners and mentors from around the world, fostering a diverse learning environment.",
    icon: Globe,
  },
  {
    title: "Flexible Learning",
    description: "Learn at your own pace with our flexible scheduling and personalized learning paths.",
    icon: Clock,
  },
  {
    title: "Industry Alignment",
    description: "Our courses are designed to meet current industry demands and prepare you for real-world challenges.",
    icon: CheckCircle,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Hero Section */}
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
            About C-Tek Learning
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-10 text-neutral-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering the next generation of tech professionals through personalized mentorship and hands-on learning.
          </motion.p>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-[#f79920]" />
                  <h3 className="text-4xl font-bold text-[#1c1b1b] mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1c1b1b] mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To bridge the gap between traditional education and industry demands by providing accessible, high-quality tech education through personalized mentorship and practical learning experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-[#1c1b1b] mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Values
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BackgroundGradient className="h-full">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-[#f79920] bg-opacity-10 rounded-xl">
                          <value.icon className="w-6 h-6 text-[#f79920]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                          <p className="text-gray-600">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </BackgroundGradient>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 