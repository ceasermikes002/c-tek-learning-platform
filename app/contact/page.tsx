"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Boxes } from "@/components/ui/background-boxes";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-[#f79920]" />,
      title: "Email Us",
      details: "support@cteklearning.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: <Phone className="w-6 h-6 text-[#f79920]" />,
      title: "Call Us",
      details: "+234 813 333 3333",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#f79920]" />,
      title: "Visit Us",
      details: "123 Learning Street",
      description: "Lagos, Nigeria",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] pb-24">
      {/* Hero Section with Background Boxes */}
      <section className="relative bg-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden max-h-screen">
          <Boxes className="opacity-30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions about our platform? We&apos;re here to help.
              Fill out the form below and we&apos;ll get back to you shortly.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BackgroundGradient className="h-full">
                  <Card className="h-full backdrop-blur-sm bg-white/90">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-[#f79920] bg-opacity-10 rounded-xl">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{info.title}</h3>
                          <p className="text-gray-600">{info.details}</p>
                          <p className="text-sm text-gray-500">{info.description}</p>
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

      {/* Contact Form Section */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden max-h-screen">
          <Boxes className="opacity-[0.02] dark:opacity-[0.05]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <BackgroundGradient>
            <Card className="backdrop-blur-sm bg-white/90">
              <CardContent className="p-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(async (data) => {
                      setIsLoading(true);
                      try {
                        const response = await fetch("/api/contact", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(data),
                        });

                        if (!response.ok) throw new Error();

                        toast({
                          title: "Message sent successfully!",
                          description: "We'll get back to you as soon as possible.",
                        });
                        form.reset();
                      } catch {
                        toast({
                          variant: "destructive",
                          title: "Error",
                          description: "Failed to send message. Please try again.",
                        });
                      } finally {
                        setIsLoading(false);
                      }
                    })}
                    className="space-y-4"
                  >
                    {/* Form Fields */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="What's this about?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-[#f79920] hover:bg-[#e0891c]"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        "Sending..."
                      ) : (
                        <span className="flex items-center space-x-2">
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </BackgroundGradient>
        </motion.div>
      </section>
    </div>
  );
}
