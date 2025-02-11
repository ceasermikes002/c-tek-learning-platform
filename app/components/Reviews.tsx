"use client";

import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "John Doe",
        avatar: "/path/to/john-doe-avatar.jpg",
        initials: "JD",
        quote: "C-Tek Tutoring helped me land my first job as a frontend developer! The personalized attention is unmatched."
    },
    {
        name: "Jane Smith", 
        avatar: "/path/to/jane-smith-avatar.jpg",
        initials: "JS",
        quote: "The Fullstack course was exactly what I needed to understand both frontend and backend."
    },
    {
        name: "Michael Lee",
        avatar: "/path/to/michael-lee-avatar.jpg", 
        initials: "ML",
        quote: "Their teaching style makes complex topics simple and easy to grasp. Highly recommend!"
    }
];

const Reviews = () => {
    return (
        <section className="bg-[#1c1b1b] text-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Students Say</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Hear from our successful graduates who have transformed their careers through our courses
                    </p>
                </motion.div>

                <div className="relative">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem 
                                    key={index} 
                                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="bg-[#2b2a2a] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    >
                                        <Avatar className="mx-auto mb-6 h-16 w-16 border-2 border-[#f79920]">
                                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                            <AvatarFallback className="bg-[#f79920] text-white">
                                                {testimonial.initials}
                                            </AvatarFallback>
                                        </Avatar>
                                        <p className="text-lg mb-6 text-gray-200 leading-relaxed">
                                            &quot;{testimonial.quote}&quot;
                                        </p>
                                        <p className="text-[#f79920] font-semibold text-lg">
                                            - {testimonial.name}
                                        </p>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2 text-white hover:text-[#f79920] transition-colors" />
                        <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-white hover:text-[#f79920] transition-colors" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
