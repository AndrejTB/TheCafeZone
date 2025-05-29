import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDUcVsLvY01Zi51WEcq3mHZJxAncQ7L0ug",
  authDomain: "thezonecafe-623a5.firebaseapp.com",
  projectId: "thezonecafe-623a5",
  storageBucket: "thezonecafe-623a5.appspot.com",
  messagingSenderId: "346906933944",
  appId: "1:346906933944:web:71a744cfcba59513b6124d",
  measurementId: "G-MHQSHMTPBF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function App() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert(`Welcome, ${result.user.displayName}`);
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: 'Arial', textAlign: 'center' }}>
      <h1>Welcome to TheZoneCafe ☕</h1>
      <p>Start connecting with people. Log in to enter the zone.</p>
      <button onClick={handleLogin} style={{ padding: '10px 20px', fontSize: 16 }}>
        Sign in with Google
      </button>
    </div>
  );
}

export default App;