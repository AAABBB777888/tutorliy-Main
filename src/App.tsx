import React, { useState } from 'react';
import { GraduationCap, Coins } from 'lucide-react';
import { JobCard } from './components/JobCard';
import { JobDetailsModal } from './components/JobDetailsModal';
import { CreditPackagesModal } from './components/CreditPackagesModal';
import { tuitionJobs } from './data';
import { User, TuitionJob } from './types';

function App() {
  const [user, setUser] = useState<User>({ credits: 10 });
  const [contactsShown, setContactsShown] = useState<Set<string>>(new Set());
  const [selectedJob, setSelectedJob] = useState<TuitionJob | null>(null);
  const [showCreditPackages, setShowCreditPackages] = useState(false);

  const handleShowContact = (jobId: string) => {
    if (user.credits > 0 && !contactsShown.has(jobId)) {
      setUser(prev => ({ ...prev, credits: prev.credits - 1 }));
      setContactsShown(prev => new Set([...prev, jobId]));
    } else if (user.credits === 0) {
      setShowCreditPackages(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <GraduationCap className="w-8 h-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">TutorConnect</h1>
            </div>
            <button
              onClick={() => setShowCreditPackages(true)}
              className="flex items-center space-x-2 bg-indigo-50 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <Coins className="w-5 h-5 text-indigo-600" />
              <span className="font-semibold text-indigo-600">{user.credits} Credits</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tuitionJobs.map((job) => (
            <JobCard 
              key={job.id}
              job={job}
              onClick={() => setSelectedJob(job)}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © 2024 TutorConnect. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Modals */}
      {selectedJob && (
        <JobDetailsModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          onShowContact={() => handleShowContact(selectedJob.id)}
          contactVisible={contactsShown.has(selectedJob.id)}
        />
      )}

      {showCreditPackages && (
        <CreditPackagesModal
          onClose={() => setShowCreditPackages(false)}
        />
      )}
    </div>
  );
}

export default App;