"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar = () => {
    const { data: session } = useSession();
    const pathname = usePathname();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isOpen, setIsOpen] = useState(false);

    const toggleSheet = () => {
        setIsOpen((prev) => !prev);
    };

    const isActivePath = (path: string) => {
        return pathname === path;
    };

    return (
        <motion.header 
            className="bg-gradient-to-r from-[#024341] to-[#035e5b] text-white sticky top-0 z-50 shadow-lg"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                    <Image 
                        src="/C-Tek-Logo-v2.png" 
                        alt="C-Tek Logo" 
                        width={40} 
                        height={40}
                        className="rounded-lg"
                    />
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        C-Tek Learning
                    </h1>
                </Link>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger onClick={toggleSheet}>
                            <Menu className="h-6 w-6 hover:text-[#f79920] transition-colors" />
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px]" onChange={toggleSheet}>
                            <div className="flex flex-col space-y-6 mt-8">
                                <Link href="/" onClick={toggleSheet}>
                                    <p className={`transition-all duration-300 py-3 px-4 rounded-lg ${isActivePath('/') ? 'bg-[#f79920] text-white shadow-md' : 'hover:bg-[#f799204d] text-black hover:translate-x-2'}`}>
                                        Home
                                    </p>
                                </Link>
                                <Link href="/about" onClick={toggleSheet}>
                                    <p className={`transition-all duration-300 py-3 px-4 rounded-lg ${isActivePath('/about') ? 'bg-[#f79920] text-white shadow-md' : 'hover:bg-[#f799204d] text-black hover:translate-x-2'}`}>
                                        About
                                    </p>
                                </Link>
                                <Link href="/courses" onClick={toggleSheet}>
                                    <p className={`transition-all duration-300 py-3 px-4 rounded-lg ${isActivePath('/courses') ? 'bg-[#f79920] text-white shadow-md' : 'hover:bg-[#f799204d] text-black hover:translate-x-2'}`}>
                                        Courses
                                    </p>
                                </Link>
                                <Link href="/contact" onClick={toggleSheet}>
                                    <p className={`transition-all duration-300 py-3 px-4 rounded-lg ${isActivePath('/contact') ? 'bg-[#f79920] text-white shadow-md' : 'hover:bg-[#f799204d] text-black hover:translate-x-2'}`}>
                                        Contact
                                    </p>
                                </Link>

                                {session ? (
                                    <div className="space-y-4 pt-4 border-t">
                                        <Link href="/dashboard" onClick={toggleSheet}>
                                            <p className={`px-4 py-3 rounded-lg transition-all duration-300 ${isActivePath('/dashboard') ? 'bg-[#024341] text-white' : 'bg-[#f79920] text-[#1c1b1b] hover:bg-[#024341] hover:text-white'}`}>
                                                Dashboard
                                            </p>
                                        </Link>
                                        <div className="flex items-center gap-3 px-4">
                                            <Image
                                                src={session.user?.image || '/default-avatar.png'} 
                                                alt="Profile" 
                                                className="w-10 h-10 rounded-full border-2 border-[#f79920]"
                                                width={40}
                                                height={40}
                                            />
                                            <span className="text-black font-medium">{session.user?.firstName}</span>
                                        </div>
                                        <button 
                                            onClick={() => signOut()}
                                            className="w-full bg-red-500 text-white px-4 py-3 rounded-lg transition-all hover:bg-red-600 hover:shadow-lg"
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-4 pt-4 border-t">
                                        <Button 
                                            onClick={() => signIn()}
                                            className="w-full bg-[#f79920] text-[#1c1b1b] px-4 py-6 rounded-lg transition-all hover:bg-[#e68a1c] hover:shadow-lg"
                                        >
                                            Sign In
                                        </Button>
                                        <Button
                                            onClick={() => signIn()}
                                            className="w-full bg-[#024341] text-white px-4 py-6 rounded-lg transition-all hover:bg-[#035e5b] hover:shadow-lg"
                                        >
                                            Sign Up
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <div className="flex space-x-2">
                        <Link href="/" className={`transition-all duration-300 py-2 px-4 rounded-lg ${isActivePath('/') ? 'bg-[#f79920] text-white shadow-md' : 'hover:bg-[#f799204d] text-white'}`}>
                            Home
                        </Link>
                        <Link href="/about" className={`transition-all duration-300 py-2 px-4 rounded-lg ${isActivePath('/about') ? 'bg-[#f79920] text-white shadow-md' : 'hover:bg-[#f799204d] text-white'}`}>
                            About
                        </Link>
                        <Link href="/courses" className={`transition-all duration-300 py-2 px-4 rounded-lg ${isActivePath('/courses') ? 'bg-[#f79920] text-white shadow-md' : 'hover:bg-[#f799204d] text-white'}`}>
                            Courses
                        </Link>
                        <Link href="/contact" className={`transition-all duration-300 py-2 px-4 rounded-lg ${isActivePath('/contact') ? 'bg-[#f79920] text-white shadow-md' : 'hover:bg-[#f799204d] text-white'}`}>
                            Contact
                        </Link>
                    </div>
                    
                    {session ? (
                        <div className="flex items-center space-x-4">
                            <Link href="/dashboard" className={`px-4 py-2 rounded-lg transition-all duration-300 ${isActivePath('/dashboard') ? 'bg-white text-[#024341]' : 'bg-[#f79920] text-[#1c1b1b] hover:bg-white hover:text-[#024341]'}`}>
                                Dashboard
                            </Link>
                            <div className="flex items-center gap-3 px-2">
                                <Image 
                                    src={session.user?.image || '/default-avatar.png'} 
                                    alt="Profile" 
                                    className="w-10 h-10 rounded-full border-2 border-[#f79920]"
                                    width={40}
                                    height={40}
                                />
                                {/* <span className="font-medium">{session.user?.firstName}</span> */}
                            </div>
                            <Button 
                                onClick={() => signOut()}
                                className="bg-red-500 text-white px-6 py-2 rounded-lg transition-all hover:bg-red-600 hover:shadow-lg"
                            >
                                Sign Out
                            </Button>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <Button 
                                onClick={() => signIn()}
                                className="bg-[#f79920] text-[#1c1b1b] px-6 py-2 rounded-lg transition-all hover:bg-[#e68a1c] hover:shadow-lg"
                            >
                                Sign In
                            </Button>
                            <Button
                                onClick={() => signIn()}
                                className="bg-white text-[#024341] px-6 py-2 rounded-lg transition-all hover:bg-gray-100 hover:shadow-lg"
                            >
                                Sign Up
                            </Button>
                        </div>
                    )}
                </nav>
            </div>
        </motion.header>
    );
};

export default Navbar;
