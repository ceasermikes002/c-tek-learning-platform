import { PrismaClient, UserRole, SessionFrequency, PaymentStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.tutorSession.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.enrollment.deleteMany();
  await prisma.coursePrice.deleteMany();
  await prisma.course.deleteMany();
  await prisma.learnerProfile.deleteMany();
  await prisma.mentorProfile.deleteMany();
  await prisma.user.deleteMany();

  // Hash passwords
  const mentorPassword = await bcrypt.hash('MentorPass123!', 10);
  const learnerPassword = await bcrypt.hash('LearnerPass123!', 10);

  // Create Mentor User
  const mentorUser = await prisma.user.create({
    data: {
      email: 'mentor@example.com',
      firstName: 'John',
      lastName: 'Doe',
      role: UserRole.MENTOR,
      emailVerified: new Date(), // Set to a valid date
      hashedPassword: mentorPassword,
      mentorProfile: {
        create: {
          bio: 'Experienced JavaScript and TypeScript developer',
          expertise: ['JavaScript', 'TypeScript', 'React'],
          hourlyRate: 50,
          availability: JSON.stringify({ monday: ['10:00-12:00', '14:00-16:00'] }),
        },
      },
    },
    include: {
      mentorProfile: true,
    },
  });
  console.log('✅ Mentor User Created:', mentorUser);

  // Create Learner User
  const learnerUser = await prisma.user.create({
    data: {
      email: 'learner@example.com',
      firstName: 'Jane',
      lastName: 'Smith',
      role: UserRole.LEARNER,
      emailVerified: new Date(), // Set to a valid date
      hashedPassword: learnerPassword,
      learnerProfile: {
        create: {},
      },
    },
    include: {
      learnerProfile: true,
    },
  });
  console.log('✅ Learner User Created:', learnerUser);

  // Create a Course
  const course = await prisma.course.create({
    data: {
      title: 'Fullstack Web Development',
      description: 'Learn to build fullstack applications using modern web technologies.',
      audience: 'Beginners to Intermediate',
      topics: ['JavaScript', 'React', 'Node.js'],
      deliveryMode: 'Online',
      reschedulingPolicy: 'Flexible rescheduling allowed',
      paymentMethods: ['Credit Card', 'PayPal'],
      specialOffers: ['Discount for early sign-ups'],
      mentors: {
        connect: { id: mentorUser.mentorProfile?.id || '' },
      },
    },
  });
  console.log('✅ Course Created:', course);

  // Create Course Pricing
  const coursePrice = await prisma.coursePrice.create({
    data: {
      courseId: course.id,
      frequency: SessionFrequency.TWICE_A_WEEK,
      sessionDuration: 60,
      price: 10000,
    },
  });
  console.log('✅ Course Price Created:', coursePrice);

  // Create Enrollment
  const enrollment = await prisma.enrollment.create({
    data: {
      learnerId: learnerUser.learnerProfile?.id || '',
      courseId: course.id,
      frequency: SessionFrequency.TWICE_A_WEEK,
      startDate: new Date(),
      endDate: new Date(new Date().setMonth(new Date().getMonth() + 3)),
    },
  });
  console.log('✅ Enrollment Created:', enrollment);

  // Create a Payment
  const payment = await prisma.payment.create({
    data: {
      enrollmentId: enrollment.id,
      amount: 10000,
      status: PaymentStatus.COMPLETED,
      paymentDate: new Date(),
    },
  });
  console.log('✅ Payment Created:', payment);

  // Create a Tutor Session
  const tutorSession = await prisma.tutorSession.create({
    data: {
      enrollmentId: enrollment.id,
      mentorId: mentorUser.mentorProfile?.id || '',
      learnerId: learnerUser.learnerProfile?.id || '',
      meetLink: 'https://zoom.us/123456789',
      startTime: new Date(),
      endTime: new Date(new Date().getTime() + 60 * 60 * 1000), // 1-hour session
      status: 'scheduled',
    },
  });
  console.log('✅ Tutor Session Created:', tutorSession);
}

main()
  .then(() => {
    console.log('🌱 Database seeding completed!');
  })
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
