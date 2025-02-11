"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { 
  BookOpen, 
  Trophy, 
  Calendar, 
  Bell, 
//   Clock, 
//   BarChart,
  Users,
  MessageSquare,
  Bookmark
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LearnerDashboard = () => {
  const router = useRouter();
  const { data: session } = useSession();   

  const stats = [
    { label: "Courses Enrolled", value: "4" },
    { label: "Hours Learned", value: "26" },
    { label: "Certificates", value: "2" },
    { label: "Course Progress", value: "68%" },
  ];

  const upcomingClasses = [
    {
      title: "Advanced JavaScript",
      time: "2:00 PM",
      date: "Today",
      mentor: "John Doe"
    },
    {
      title: "React Fundamentals",
      time: "4:30 PM",
      date: "Tomorrow",
      mentor: "Jane Smith"
    }
  ];

  return (
    <div className="flex-1 transition-all ml-28 duration-200 ease-in-out bg-[#f3f4f6] min-h-screen">
      {/* Top Bar */}
      <div className="bg-white border-b">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {session?.user?.image && (
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={session.user.image}
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <h2 className="text-xl font-semibold">
                  Welcome back, {session?.user?.firstName}
                </h2>
                <p className="text-sm text-gray-500">
                  Continue your learning journey
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="w-6 h-6 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MessageSquare className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-[#f79920]">{stat.value}</p>
                </div>
              ))}
            </motion.div>

            {/* Current Course Progress */}
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Current Course Progress</h3>
                <button 
                  onClick={() => router.push('/courses')}
                  className="text-[#f79920] text-sm hover:underline"
                >
                  View All Courses
                </button>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Advanced JavaScript</span>
                    <span className="text-[#f79920]">68%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-[#f79920] rounded-full w-[68%]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>React Fundamentals</span>
                    <span className="text-[#f79920]">45%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-[#f79920] rounded-full w-[45%]"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Learning Path */}
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-4">Your Learning Path</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 h-full w-px bg-gray-200"></div>
                <div className="space-y-6">
                  {['HTML & CSS', 'JavaScript', 'React', 'Node.js'].map((step, index) => (
                    <div key={step} className="relative flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        index <= 1 ? 'bg-green-500' : 'bg-gray-200'
                      }`}>
                        {index <= 1 ? (
                          <Trophy className="w-4 h-4 text-white" />
                        ) : (
                          <BookOpen className="w-4 h-4 text-gray-500" />
                        )}
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">{step}</p>
                        <p className="text-sm text-gray-500">
                          {index <= 1 ? 'Completed' : index === 2 ? 'In Progress' : 'Upcoming'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Upcoming Classes */}
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold mb-4">Upcoming Classes</h3>
              <div className="space-y-4">
                {upcomingClasses.map((class_, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="bg-[#f79920] bg-opacity-10 p-2 rounded-lg">
                      <Calendar className="w-6 h-6 text-[#f79920]" />
                    </div>
                    <div>
                      <p className="font-medium">{class_.title}</p>
                      <p className="text-sm text-gray-500">
                        {class_.time} · {class_.date}
                      </p>
                      <p className="text-sm text-gray-500">
                        with {class_.mentor}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => router.push('/sessions')}
                className="w-full mt-4 text-center text-[#f79920] text-sm hover:underline"
              >
                View All Classes
              </button>
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <BookOpen className="w-5 h-5" />, label: "Browse Courses", path: '/courses' },
                  { icon: <Users className="w-5 h-5" />, label: "Find Mentors", path: '/mentors' },
                  { icon: <MessageSquare className="w-5 h-5" />, label: "Messages", path: '/messages' },
                  { icon: <Bookmark className="w-5 h-5" />, label: "Saved", path: '/saved' },
                ].map((action, index) => (
                  <button
                    key={index}
                    onClick={() => router.push(action.path)}
                    className="p-4 text-center hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="mx-auto w-fit mb-2 text-[#f79920]">
                      {action.icon}
                    </div>
                    <span className="text-sm">{action.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnerDashboard;