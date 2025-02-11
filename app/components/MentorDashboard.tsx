"use client";

import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Bell,
  MessageSquare,
  Calendar,
  Users,
  Star,
  BarChart,
  Clock
} from "lucide-react";

const MentorDashboard = () => {
  const { data: session } = useSession();

  const stats = [
    { label: "Active Students", value: "12" },
    { label: "Hours Taught", value: "48" },
    { label: "Courses", value: "3" },
    { label: "Rating", value: "4.8" },
  ];

  const upcomingSessions = [
    {
      student: "Alice Johnson",
      course: "Advanced JavaScript",
      time: "2:00 PM",
      date: "Today",
    },
    {
      student: "Bob Smith",
      course: "React Fundamentals",
      time: "4:30 PM",
      date: "Tomorrow",
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
                  Manage your teaching schedule and students
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

            {/* Teaching Schedule */}
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Teaching Schedule</h3>
                <button className="text-[#f79920] text-sm hover:underline">
                  View Full Schedule
                </button>
              </div>
              <div className="space-y-4">
                {upcomingSessions.map((session, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="bg-[#f79920] bg-opacity-10 p-2 rounded-lg">
                      <Clock className="w-6 h-6 text-[#f79920]" />
                    </div>
                    <div>
                      <p className="font-medium">{session.course}</p>
                      <p className="text-sm text-gray-500">
                        Student: {session.student}
                      </p>
                      <p className="text-sm text-gray-500">
                        {session.time} · {session.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Student Progress */}
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-4">Student Progress</h3>
              <div className="space-y-4">
                {['Alice Johnson', 'Bob Smith', 'Carol White'].map((student, index) => (
                  <div key={student} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{student}</span>
                      <span className="text-[#f79920]">{75 - index * 15}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-[#f79920] rounded-full" 
                        style={{ width: `${75 - index * 15}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold mb-4">Performance Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Average Rating</span>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold">4.8/5.0</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Completion Rate</span>
                  <span className="font-semibold">92%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Student Satisfaction</span>
                  <span className="font-semibold">96%</span>
                </div>
              </div>
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
                  { icon: <Calendar className="w-5 h-5" />, label: "Schedule" },
                  { icon: <Users className="w-5 h-5" />, label: "Students" },
                  { icon: <MessageSquare className="w-5 h-5" />, label: "Messages" },
                  { icon: <BarChart className="w-5 h-5" />, label: "Analytics" },
                ].map((action, index) => (
                  <button
                    key={index}
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

export default MentorDashboard; 