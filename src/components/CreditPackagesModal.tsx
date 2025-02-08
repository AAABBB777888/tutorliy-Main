import React from 'react';
import { X, Check } from 'lucide-react';
import { CreditPackage } from '../types';
import { creditPackages } from '../data';

interface CreditPackagesModalProps {
  onClose: () => void;
}

export function CreditPackagesModal({ onClose }: CreditPackagesModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Purchase Credits</h2>
              <p className="text-gray-600 mt-1">Choose a package that suits your needs</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {creditPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-lg p-6 ${pkg.color} transform transition-all duration-300 hover:scale-105 flex flex-col`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-gray-900 mb-4">
                  ৳{pkg.price}
                </div>
                
                <div className="space-y-3 flex-grow">
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>{pkg.credits} Tuition Applications</span>
                  </div>
                  
                  {pkg.tutorTypes.map((type, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{type}</span>
                    </div>
                  ))}
                  
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Salary Range: {pkg.salaryRange}</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200">
                  Purchase Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}