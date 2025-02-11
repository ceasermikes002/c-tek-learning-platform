import React from 'react';
import { Mail, BookOpen, Calendar, User } from 'lucide-react';
import { LearnerProfileProps } from '@/types/learnerProfile';

const LearnerProfile: React.FC<LearnerProfileProps> = ({ profile }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
        <User className="mr-3 text-[#f79920]" /> Learner Profile
      </h2>

      {/* User Information */}
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-semibold flex items-center text-gray-700">
          <User className="mr-2 text-[#f79920]" /> User Information
        </h3>
        <p className="text-gray-600"><strong>Name:</strong> {profile.user.firstName} {profile.user.lastName}</p>
        <p className="text-gray-600 flex items-center">
          <Mail className="mr-2 text-[#f79920]" /> <strong>Email:</strong> {profile.user.email}
        </p>
      </div>

      {/* Enrollments */}
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-semibold flex items-center text-gray-700">
          <BookOpen className="mr-2 text-[#f79920]" /> Enrollments
        </h3>
        {profile.enrollments.length > 0 ? (
          <ul className="mt-2 space-y-2">
            {profile.enrollments.map((enrollment, index) => (
              <li key={index} className="flex items-center text-gray-600 bg-white p-2 rounded-lg shadow-sm">
                <Calendar className="mr-3 text-[#f79920]" />
                <span className="flex flex-col">
                  <strong>{enrollment.courseName}</strong>
                  <span className="text-sm text-gray-500">Enrolled on {new Date(enrollment.dateEnrolled).toLocaleDateString()}</span>
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No enrollments found.</p>
        )}
      </div>

      {/* Tutor Sessions */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold flex items-center text-gray-700">
          <Calendar className="mr-2 text-[#f79920]" /> Tutor Sessions
        </h3>
        {profile.tutorSessions.length > 0 ? (
          <ul className="mt-2 space-y-2">
            {profile.tutorSessions.map((session, index) => (
              <li key={index} className="flex items-center text-gray-600 bg-white p-2 rounded-lg shadow-sm">
                <Calendar className="mr-3 text-[#f79920]" />
                <span className="flex flex-col">
                  <strong>{session.topic}</strong>
                  <span className="text-sm text-gray-500">
                    Session ID: {session.sessionId} (Date: {new Date(session.date).toLocaleDateString()})
                  </span>
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No tutor sessions found.</p>
        )}
      </div>
    </div>
  );
};

export default LearnerProfile;
