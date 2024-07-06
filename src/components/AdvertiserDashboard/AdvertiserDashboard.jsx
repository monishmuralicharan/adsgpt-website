import React from 'react';

const AdvertiserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-white shadow-md">
        <div className="h-16 flex items-center justify-center font-bold text-xl">Dashboard</div>
        <nav className="flex flex-col p-4">
          <button className="mb-4 py-2 px-4 text-left w-full bg-blue-500 text-white rounded hover:bg-blue-600">
            Main Dashboard
          </button>
          <button className="mb-4 py-2 px-4 text-left w-full bg-gray-300 text-black rounded hover:bg-gray-400">
            Profile Dashboard
          </button>
          <button className="mb-4 py-2 px-4 text-left w-full bg-gray-300 text-black rounded hover:bg-gray-400">
            Payment
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <header className="bg-white shadow mb-6">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-black">Advertiser Dashboard</h1>
          </div>
        </header>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Ad Views Section */}
          <section className="bg-white shadow rounded-lg p-6 col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-semibold text-black">Ad Views</h2>
            <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
              <div className="bg-gray-200 p-4 rounded-lg text-center">
                <h3 className="font-bold text-black">Daily Views</h3>
                <p>0</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center">
                <h3 className="font-bold text-black">Monthly Views</h3>
                <p>0</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center">
                <h3 className="font-bold text-black">Total Views</h3>
                <p>0</p>
              </div>
            </div>
          </section>
          {/* Ad Leads Section */}
          <section className="bg-white shadow rounded-lg p-6 col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-semibold text-black">Ad Leads</h2>
            <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
              <div className="bg-gray-200 p-4 rounded-lg text-center">
                <h3 className="font-bold text-black">Daily Leads</h3>
                <p>0</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center">
                <h3 className="font-bold text-black">Monthly Leads</h3>
                <p>0</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center">
                <h3 className="font-bold text-black">Total Leads</h3>
                <p>0</p>
              </div>
            </div>
          </section>
        </div>
        {/* Ad Information Section */}
        <section className="bg-white shadow rounded-lg p-6 mt-6">
          <h2 className="text-2xl font-semibold text-black">Ad Information</h2>
          <form className="mt-4 space-y-4">
            <div>
              <label className="block mb-2 text-black">Ad Text:</label>
              <input className="text-black rounded-lg w-full p-2 border" type="text" />
            </div>
            <div>
              <label className="block mb-2 text-black">Ad Link:</label>
              <input className="text-black rounded-lg w-full p-2 border" type="text" />
            </div>
            <div>
              <label className="block mb-2 text-black">Picture Link:</label>
              <input className="text-black rounded-lg w-full p-2 border" type="text" />
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default AdvertiserDashboard;
