// components/LoadingWrapper.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const LoadingWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulate loading time of 2 seconds (adjust as needed)

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <div className="flex flex-col justify-center items-center min-h-screen bg-[#024341]">
                    <Loader2 className="h-16 w-16 animate-spin text-[#f79920]" />
                    <p className="mt-8 text-[#f79920] text-2xl md:text-4xl font-bold">
                        Hold tight, we&apos;re getting things ready! 😉
                    </p>
                </div>
            ) : (
                children
            )}
        </>
    );
};

export default LoadingWrapper;
