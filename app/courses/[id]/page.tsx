"use client";
import { useParams } from 'next/navigation';
import coursesData from '@/data/coursesData';
import { motion } from 'framer-motion';
import {
  Book, Users, DollarSign, Package, Clipboard, Calendar, CreditCard, ArrowLeft
} from 'lucide-react';
import {
  TableHeader, TableRow, TableHead, TableBody, TableCell, Table,
} from '@/components/ui/table';
import { Boxes } from '@/components/ui/background-boxes';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CourseDetailPage = () => {
  const { id } = useParams(); // Get the course ID from the URL

  // Find the course based on the ID
  const course = coursesData.find((course) => course.id === id);

  // If the course is not found, handle it gracefully
  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Course not found</h2>
        <Link href="/courses">
          <Button variant="default">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-[#1c1b1b] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Boxes />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <Link href="/courses">
            <Button variant="ghost" className="mb-8 text-white hover:text-black">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Button>
          </Link>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {course.title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-neutral-300 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {course.description}
          </motion.p>
        </div>
      </header>

      {/* Course Details Section */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Target Audience',
              content: course.audience,
              icon: Users,
              delay: 0.3,
            },
            {
              title: 'Topics Covered',
              content: (
                <ul className="space-y-2">
                  {course.topics.map((topic, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#f79920]" />
                      {topic}
                    </li>
                  ))}
                </ul>
              ),
              icon: Book,
              delay: 0.4,
            },
          ].map(({ title, content, icon: Icon, delay }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-[#f79920]" />
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {content}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-[#f79920]" />
                Pricing Plans
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Classes Per Week</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Monthly Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {course.pricing.map((plan, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{plan.classesPerWeek}x / week</TableCell>
                      <TableCell>{plan.duration}</TableCell>
                      <TableCell>${plan.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {[
            {
              title: 'Special Offers',
              content: (
                <ul className="space-y-2">
                  {course.specialOffers.map((offer, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#f79920]" />
                      {offer}
                    </li>
                  ))}
                </ul>
              ),
              icon: Package,
              delay: 0.6,
            },
            {
              title: 'Delivery Mode',
              content: course.deliveryMode,
              icon: Clipboard,
              delay: 0.7,
            },
            {
              title: 'Rescheduling Policy',
              content: course.reschedulingPolicy,
              icon: Calendar,
              delay: 0.8,
            },
            {
              title: 'Payment Methods',
              content: (
                <ul className="space-y-2">
                  {course.paymentMethods.map((method, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#f79920]" />
                      {method}
                    </li>
                  ))}
                </ul>
              ),
              icon: CreditCard,
              delay: 0.9,
            },
          ].map(({ title, content, icon: Icon, delay }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-[#f79920]" />
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {content}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
