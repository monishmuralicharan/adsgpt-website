import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import axios from 'axios';

const SignUp = ({ role }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("authenticated user sign up");

      const baseURL = process.env.HEROKU_URL || 'http://localhost:3000'; //second part for local dev
      // Send user data and role to the server
      await axios.post('{HEROKU_URL}/api/signup', { user: { uid: user.uid, email: user.email }, role });

      window.location.href = role === 'creator' ? '/creator-dashboard' : '/advertiser-dashboard';
    } catch (error) {
      setError(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-20">
      <h1 className="text-white text-3xl font-bold mb-4">
        {role === 'creator' ? 'Creator Sign Up' : 'Advertiser Sign Up'}
      </h1>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Email:</label>
          <input className="text-black" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input className="text-black" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Sign Up</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default SignUp;
