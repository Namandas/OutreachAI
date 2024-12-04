import React from 'react';
import EmailForm from '@/components/EmailForm'; // Assuming EmailForm is in the correct directory

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-extrabold mb-6">Dashboard</h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-lg hover:text-blue-300 transition duration-300">Overview</a>
            </li>
            <li>
              <a href="#" className="text-lg hover:text-blue-300 transition duration-300">Cold Mail Generator</a>
            </li>
            <li>
              <a href="#" className="text-lg hover:text-blue-300 transition duration-300">Sent Mails</a>
            </li>
          </ul>
        </div>
        <div className="text-center mt-auto">
          <p className="text-sm">&copy; 2024 Your Company</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6">
          {/* Header Section */}
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Welcome to Your Dashboard</h1>
            <p className="text-lg text-gray-700 mb-6">Generate and send personalized cold mails to potential clients or leads, right from here.</p>
          </div>

          {/* ColdMailForm Component */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Create Personalized Cold Mail</h2>
            <EmailForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
