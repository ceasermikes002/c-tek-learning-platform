"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center px-4">
      <motion.div 
        className="max-w-md w-full text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <h1 className="text-9xl font-bold text-[#f79920]">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900">Page Not Found</h2>
          <p className="text-gray-600">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <Link href="/">
          <Button className="bg-[#f79920] hover:bg-[#e0891c]">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
} 