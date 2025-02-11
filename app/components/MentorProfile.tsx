import React from 'react';

interface MentorProfileProps {
  profile: {
    bio: string;
    expertise: string[];
    hourlyRate: number;
    // Add other relevant fields
  };
}

const MentorProfile: React.FC<MentorProfileProps> = ({ profile }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Mentor Profile</h2>
      <p className="mt-2">{profile.bio || "No bio available."}</p>
      <h3 className="mt-4 font-semibold">Expertise:</h3>
      <ul>
        {profile.expertise.length > 0 ? (
          profile.expertise.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No expertise listed.</li>
        )}
      </ul>
      <h3 className="mt-4 font-semibold">Hourly Rate:</h3>
      <p>{profile.hourlyRate ? `$${profile.hourlyRate}` : "Not specified."}</p>
    </div>
  );
};

export default MentorProfile; 