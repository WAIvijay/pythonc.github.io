import React, { useState } from 'react';
import './App.css';

function RegistrationPage({ onSwitch }) {
  const handleRegister = (e) => {
    e.preventDefault();
    alert('Registration Successful!');
    onSwitch('login');
  };
  return (
    <div className="form-container">
      <h2>Registration</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="First Name" required /><br />
        <input type="text" placeholder="Last Name" required /><br />
        <input type="email" placeholder="Email" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Register</button><br />
        <p>
          Already registered?{' '}
          <span onClick={() => onSwitch('login')}>Login</span>
        </p>
      </form>
    </div>
  );
}

function LoginPage({ onSwitch }) {
  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login Successful!');
    onSwitch('feedback');
  };
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Login</button><br />
        <p>
          Don't have an account?{' '}
          <span onClick={() => onSwitch('register')}>Register</span>
        </p>
      </form>
    </div>
  );
}

function FeedbackForm({ onSwitch }) {
  const handleFeedback = (e) => {
    e.preventDefault();
    onSwitch('thankyou');
  };
  return (
    <div className="form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleFeedback}>
        <input type="text" placeholder="Your Name" required /><br />
        <input type="email" placeholder="Your Email" required /><br />
        <textarea placeholder="Your Feedback" required></textarea><br />
        <button type="submit">Submit</button><br />
        <p>
          <span onClick={() => onSwitch('login')}>Logout</span>
        </p>
      </form>
    </div>
  );
}

function ThankYouPage({ onSwitch }) {
  return (
    <div className="form-container">
      <h2>Thank You!</h2>
      <p>Your feedback has been submitted successfully.</p>
      <button onClick={() => onSwitch('login')}>Back to Login</button>
    </div>
  );
}

function App() {
  const [page, setPage] = useState('register');
  return (
    <div className="App">
      {page === 'register' && <RegistrationPage onSwitch={setPage} />}
      {page === 'login' && <LoginPage onSwitch={setPage} />}
      {page === 'feedback' && <FeedbackForm onSwitch={setPage} />}
      {page === 'thankyou' && <ThankYouPage onSwitch={setPage} />}
    </div>
  );
}

export default App;
