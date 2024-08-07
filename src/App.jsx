import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CreatorPage from './components/CreatorPage';
import TermsOfService from './components/Terms-of-service';
import AdvertiserDashboard from './components/AdvertiserDashboard/AdvertiserDashboard';
import AdvertiserProfileDashboard from './components/AdvertiserDashboard/AdvertiserProfileDashboard';
import AdvertiserPaymentDashboard from './components/AdvertiserDashboard/AdvertiserPaymentDashboard';
import CreatorDashboard from './components/CreatorDashboard/CreatorDashboard';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import AdvertiserPage from './components/AdvertiserPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AdvertiserPage />} />
        <Route path="/creator-page" element={<CreatorPage />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/signup-advertiser" element={<SignUp role="advertiser" />} />
        <Route path="/signup-creator" element={<SignUp role="creator" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/advertiser-dashboard" element={<PrivateRoute><AdvertiserDashboard /></PrivateRoute>} />
        <Route path="/advertiser-profile" element={<PrivateRoute><AdvertiserProfileDashboard /></PrivateRoute>} />
        <Route path="/advertiser-payment" element={<PrivateRoute><AdvertiserPaymentDashboard /></PrivateRoute>} />
        <Route path="/creator-dashboard" element={<PrivateRoute><CreatorDashboard /></PrivateRoute>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
