"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { Users, BookOpen } from "lucide-react";

export default function SelectRole() {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: session, update } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleRoleSelect = async (role: 'LEARNER' | 'MENTOR') => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/users/set-role', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role }),
      });

      if (response.ok) {
        // Update the session with the new role
        await update({ role });
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Error setting role:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-4">
      <motion.div 
        className="max-w-md w-full bg-white rounded-xl shadow-lg p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold text-center mb-8">Choose Your Role</h1>
        <div className="space-y-4">
          <button
            onClick={() => handleRoleSelect('LEARNER')}
            disabled={isLoading}
            className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-[#f79920] transition-colors group"
          >
            <div className="flex items-center space-x-4">
              <Users className="w-8 h-8 text-[#f79920]" />
              <div className="text-left">
                <h3 className="font-semibold text-lg">Join as a Learner</h3>
                <p className="text-gray-500">Access courses and learn from mentors</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleRoleSelect('MENTOR')}
            disabled={isLoading}
            className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-[#f79920] transition-colors group"
          >
            <div className="flex items-center space-x-4">
              <BookOpen className="w-8 h-8 text-[#f79920]" />
              <div className="text-left">
                <h3 className="font-semibold text-lg">Join as a Mentor</h3>
                <p className="text-gray-500">Create courses and teach students</p>
              </div>
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  );
} 