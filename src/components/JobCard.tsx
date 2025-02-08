import React from 'react';
import { MapPin, Users, DollarSign, User } from 'lucide-react';
import { TuitionJob } from '../types';

interface JobCardProps {
  job: TuitionJob;
  onClick: () => void;
}

export function JobCard({ job, onClick }: JobCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg p-6 relative cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={onClick}
    >
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{job.location}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-600">
          <Users className="w-4 h-4" />
          <span>{job.studentClass}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-600">
          <User className="w-4 h-4" />
          <span>Preferred: {job.preferredTutorGender}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-green-600 font-semibold">
          <DollarSign className="w-4 h-4" />
          <span>{job.salaryRange}</span>
        </div>

        <div className="mt-2 inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
          {job.tutorType}
        </div>
      </div>
    </div>
  );
}