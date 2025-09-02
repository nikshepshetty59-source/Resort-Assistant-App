import React from 'react';

function ResortAssistant() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 font-sans">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 max-w-2xl w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-2">
          Resort Assistant
        </h1>
        <p className="text-sm sm:text-base text-gray-600 text-center mb-6">
          Your personal guide for all things resort-related.
        </p>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-2 5a1 1 0 100 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
            <p className="text-gray-700">Get information about resort amenities, hours, and locations.</p>
          </div>
          <div className="flex items-center space-x-4 bg-green-50 p-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6 9a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" />
            </svg>
            <p className="text-gray-700">Request services directly, like housekeeping or room service.</p>
          </div>
          <div className="flex items-center space-x-4 bg-yellow-50 p-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 9a1 1 0 102 0v-5a1 1 0 10-2 0v5zM9 9a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-gray-700">View real-time event schedules and activities at the resort.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResortAssistant;
