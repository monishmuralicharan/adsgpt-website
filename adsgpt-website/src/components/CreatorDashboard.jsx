import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Creator Dashboard</h1>
        </div>
      </header>
      <main className="flex-1">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <h2 className="text-2xl font-semibold text-gray-800">Welcome to your dashboard!</h2>
              <p className="mt-4 text-gray-600">This is a template dashboard. You can customize it to suit your needs.</p>
              <div className="mt-6">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Button 1
                </button>
                <button className="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Button 2
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
