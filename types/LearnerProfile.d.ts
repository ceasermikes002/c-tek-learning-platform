export interface LearnerProfileProps {
    profile: {
      user: {
        firstName: string;
        lastName: string;
        email: string;
      };
      enrollments: {
        courseName: string;
        dateEnrolled: string;
      }[];
      tutorSessions: {
        sessionId: string;
        date: string;
        topic: string;
      }[];
    };
  }