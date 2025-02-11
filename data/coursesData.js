const coursesData = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      description:
        'Dive into the world of HTML, CSS, JavaScript, and the latest frameworks like Next.js and React to build engaging user interfaces.',
      audience: 'Beginners or those looking to build user interfaces.',
      topics: ['HTML', 'CSS', 'JavaScript', 'Next.js', 'Flask'],
      pricing: [
        { classesPerWeek: 1, duration: '1.5 hours', price: '20,000 NGN' },
        { classesPerWeek: 2, duration: '1.5 hours', price: '35,000 NGN' },
        { classesPerWeek: 3, duration: '1.5 hours', price: '50,000 NGN' },
      ],
      specialOffers: [
        'Get 5% off your next month for each new student referred. (Coming Soon 😉)',
        '10% discount for group classes (2-4 people). (Coming Soon 😉)',
      ],
      deliveryMode: 'All lessons take place online.',
      reschedulingPolicy: 'Flexible rescheduling allowed with 48-hour notice.',
      paymentMethods: ['Paystack', 'Bank Transfer'],
    },
    {
      id: 'backend',
      title: 'Backend Development',
      description:
        'Learn Node.js, Python, databases, and API development to power the backend of dynamic applications.',
      audience: 'Intermediate learners focusing on backend logic.',
      topics: ['Node.js', 'Express', 'Python', 'Databases (SQL/NoSQL)', 'APIs'],
      pricing: [
        { classesPerWeek: 1, duration: '1.5 hours', price: '25,000 NGN' },
        { classesPerWeek: 2, duration: '1.5 hours', price: '40,000 NGN' },
        { classesPerWeek: 3, duration: '1.5 hours', price: '55,000 NGN' },
      ],
      specialOffers: [
        'Get 5% off your next month for each new student referred. (Coming Soon 😉)',
        '10% discount for group classes (2-4 people). (Coming Soon 😉)',
      ],
      deliveryMode: 'All lessons take place online.',
      reschedulingPolicy: 'Flexible rescheduling allowed with 48-hour notice.',
      paymentMethods: ['Paystack', 'Bank Transfer'],
    },
    {
      id: 'fullstack',
      title: 'Fullstack Development',
      description:
        'Become a versatile developer by mastering both frontend and backend skills.',
      audience: 'Learners aiming to become proficient in both client-side and server-side development.',
      topics: ['Frontend & Backend Integration', 'Advanced JavaScript', 'API Development'],
      pricing: [
        { classesPerWeek: 1, duration: '2 hours', price: '30,000 NGN' },
        { classesPerWeek: 2, duration: '2 hours', price: '55,000 NGN' },
        { classesPerWeek: 3, duration: '2 hours', price: '75,000 NGN' },
      ],
      specialOffers: [
        'Get 5% off your next month for each new student referred. (Coming Soon 😉)',
        '10% discount for group classes (2-4 people). (Coming Soon 😉)',
      ],
      deliveryMode: 'Lessons take place online',
      reschedulingPolicy: 'Flexible rescheduling allowed with 48-hour notice.',
      paymentMethods: ['Paystack', 'Bank Transfer'],
    },
    {
      id: 'data-science',
      title: 'Data Science and Machine Learning (Coming Soon 😉)',
      description:
        'Learn the fundamentals of data analysis, visualization, and machine learning with hands-on projects.',
      audience: 'Aspiring data scientists or those looking to dive into AI.',
      topics: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'Data Visualization'],
      pricing: [
        { classesPerWeek: 1, duration: '2 hours', price: '35,000 NGN' },
        { classesPerWeek: 2, duration: '2 hours', price: '60,000 NGN' },
        { classesPerWeek: 3, duration: '2 hours', price: '85,000 NGN' },
      ],
      specialOffers: [
        'Get 5% off your next month for each new student referred. (Coming Soon 😉)',
        '10% discount for group classes (2-4 people). (Coming Soon 😉)',
      ],
      deliveryMode: 'All lessons take place online.',
      reschedulingPolicy: 'Flexible rescheduling allowed with 48-hour notice.',
      paymentMethods: ['Paystack', 'Bank Transfer'],
    },
    {
      id: 'Devops',
      title: 'DevOps and Cloud Engineering (Coming Soon 😉)',
      description:
        'Master the art of CI/CD, cloud infrastructure, and automation with tools like Docker, Kubernetes, and AWS.',
      audience: 'Developers looking to streamline deployment and manage cloud infrastructure.',
      topics: ['Docker', 'Kubernetes', 'AWS', 'CI/CD Pipelines', 'Infrastructure as Code (IaC)', 'Jenkins'],
      pricing: [
        { classesPerWeek: 1, duration: '2 hours', price: '40,000 NGN' },
        { classesPerWeek: 2, duration: '2 hours', price: '70,000 NGN' },
        { classesPerWeek: 3, duration: '2 hours', price: '100,000 NGN' },
      ],
      specialOffers: [
        'Get 5% off your next month for each new student referred. (Coming Soon 😉)',
        '10% discount for group classes (2-4 people). (Coming Soon 😉)',
      ],
      deliveryMode: 'All lessons take place online.',
      reschedulingPolicy: 'Flexible rescheduling allowed with 48-hour notice.',
      paymentMethods: ['Paystack', 'Bank Transfer'],
    },
  ];
  
  export default coursesData;
  