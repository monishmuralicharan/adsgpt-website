import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProfileDashboard = () => {
  const [apiKey, setApiKey] = useState('your-api-key'); // Replace with actual API key fetching logic

  const handleGenerateApiKey = () => {
    // Logic to generate new API key
    const newApiKey = 'new-generated-api-key'; // Replace with actual logic to generate API key
    setApiKey(newApiKey);
  };

  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const uid = localStorage.getItem('uid'); // assuming the uid is stored in localStorage
        const baseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL;
        const response = await fetch(`${baseURL}/api/userinfo`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ uid })
        });
        if (response.ok) {
          const data = await response.json();
          setUserInfo(data);
        } else {
          const errorData = await response.json();
          setError(errorData.message);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserInfo();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-white shadow-md">
        <div className="h-16 flex items-center justify-center font-bold text-xl">Dashboard</div>
        <nav className="flex flex-col p-4">
          <Link to="/advertiser-dashboard" className="mb-4 py-2 px-4 text-left w-full bg-gray-300 text-black rounded hover:bg-gray-400">
            Main Dashboard
          </Link>
          <button className="mb-4 py-2 px-4 text-left w-full bg-blue-500 text-white rounded hover:bg-blue-600">
            Profile Dashboard
          </button>
          <Link to="/advertiser-payment" className="mb-4 py-2 px-4 text-left w-full bg-gray-300 text-black rounded hover:bg-gray-400">
            Payment
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <header className="bg-white shadow mb-6">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-black">Profile Dashboard</h1>
          </div>
        </header>
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6">
          {/* Profile Section */}
          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-black">Profile</h2>
            <form className="mt-4 space-y-4">
              <div>
                <label className="block mb-2 text-black">Company Name:</label>
                <input
                  className="text-black rounded-lg w-full p-2 border"
                  type="text"
                  name="companyName"
                  value={userInfo?.companyName || "Company Name"}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block mb-2 text-black">Email:</label>
                <input
                  className="text-black rounded-lg w-full p-2 border"
                  type="email"
                  name="email"
                  value={userInfo?.email || "Email"}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mt-4 text-black">
                Account Created: <span>01/01/2024</span> {/* Replace with actual creation date */}
              </div>
            </form>
          </section>
          {/* API Key Section */}
          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-black">API Key</h2>
            <div className="mt-4 text-black">
              <span>Current API Key: {apiKey}</span>
            </div>
            <button
              onClick={handleGenerateApiKey}
              className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
            >
              Generate New API Key
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProfileDashboard;
