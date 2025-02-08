import React, { useState } from 'react';
import { X, Phone, AlertCircle } from 'lucide-react';
import { TuitionJob } from '../types';

interface JobDetailsModalProps {
  job: TuitionJob;
  onClose: () => void;
  onShowContact: () => void;
  contactVisible: boolean;
}

export function JobDetailsModal({ job, onClose, onShowContact, contactVisible }: JobDetailsModalProps) {
  const [showWarning, setShowWarning] = useState(false);

  const handleContactClick = () => {
    setShowWarning(true);
  };

  const handleConfirm = () => {
    setShowWarning(false);
    onShowContact();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Tuition Details</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Basic Information</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium">Location:</span>
                  <p className="text-gray-600">{job.location}</p>
                </div>
                <div>
                  <span className="font-medium">Class:</span>
                  <p className="text-gray-600">{job.studentClass}</p>
                </div>
                <div>
                  <span className="font-medium">Tuition Type:</span>
                  <p className="text-gray-600">{job.tutorType}</p>
                </div>
                <div>
                  <span className="font-medium">Salary:</span>
                  <p className="text-green-600 font-semibold">{job.salaryRange}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Requirements</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium">Preferred Gender:</span>
                  <p className="text-gray-600">{job.preferredTutorGender}</p>
                </div>
                <div>
                  <span className="font-medium">Student Gender:</span>
                  <p className="text-gray-600">{job.studentGender}</p>
                </div>
                <div>
                  <span className="font-medium">Subjects:</span>
                  <p className="text-gray-600">{job.studyCategory}</p>
                </div>
                <div>
                  <span className="font-medium">Days per Week:</span>
                  <p className="text-gray-600">{job.daysPerWeek}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-3">
              <div>
                <span className="font-medium">Preferred Time:</span>
                <p className="text-gray-600">{job.preferredTime}</p>
              </div>
              <div>
                <span className="font-medium">Number of Students:</span>
                <p className="text-gray-600">{job.numberOfStudents}</p>
              </div>
              <div>
                <span className="font-medium">Demo Class Date:</span>
                <p className="text-gray-600">{job.demoClassDate}</p>
              </div>
            </div>
          </div>

          {contactVisible ? (
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold mb-2 text-green-800">Contact Information</h4>
              <p className="text-green-700">{job.clientName}</p>
              <p className="text-green-700">{job.clientPhone}</p>
            </div>
          ) : (
            <div className="mt-6">
              <button
                onClick={handleContactClick}
                className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white px-4 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>Show Contact Information</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Credit Warning Modal */}
      {showWarning && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="flex items-center space-x-2 text-yellow-600 mb-4">
              <AlertCircle className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Credit Deduction Warning</h3>
            </div>
            <p className="text-gray-600 mb-6">
              If you want to see the client information, 1 credit will be taken from your balance.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleConfirm}
                className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200"
              >
                I Agree
              </button>
              <button
                onClick={() => setShowWarning(false)}
                className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}