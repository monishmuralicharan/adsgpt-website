import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiserPaymentDashboard = () => {
  const currentBillingAmount = "$0.00"; // Replace with logic to fetch actual billing amount

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-white shadow-md">
        <div className="h-16 flex items-center justify-center font-bold text-xl">Dashboard</div>
        <nav className="flex flex-col p-4">
          <Link to="/advertiser-dashboard" className="mb-4 py-2 px-4 text-left w-full bg-gray-300 text-black rounded hover:bg-gray-400">
            Main Dashboard
          </Link>
          <Link to="/advertiser-profile" className="mb-4 py-2 px-4 text-left w-full bg-gray-300 text-black rounded hover:bg-gray-400">
            Profile Dashboard
          </Link>
          <button className="mb-4 py-2 px-4 text-left w-full bg-blue-500 text-white rounded hover:bg-blue-600">
            Payment
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <header className="bg-white shadow mb-6">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-black">Payment Dashboard</h1>
          </div>
        </header>
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6">
          {/* Current Billing Amount Section */}
          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-black">Current Month's Billing Amount</h2>
            <div className="mt-4 text-black">
              <span>Billing Amount: {currentBillingAmount}</span>
            </div>
          </section>
          {/* Future Stripe Integration Section */}
          <section className="bg-white shadow rounded-lg p-6 mt-6">
            <h2 className="text-2xl font-semibold text-black">Payment</h2>
            <div className="mt-4 text-black">
              {/* Placeholder for future Stripe integration */}
              <span>Stripe Payment System will be integrated here.</span>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AdvertiserPaymentDashboard;
