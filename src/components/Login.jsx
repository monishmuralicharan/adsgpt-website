import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("authenticated user log in");

      const baseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL;
      const response = await fetch(`${baseURL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid: user.uid })
      });
      console.log("found user in database log in");

      if (response.ok) {
        const data = await response.json();
        const role = data.role;
        window.location.href = role === 'creator' ? '/creator-dashboard' : '/advertiser-dashboard';
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-20">
      <h1 className="text-white text-3xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input className="text-black" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input className="text-black" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Log In</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
