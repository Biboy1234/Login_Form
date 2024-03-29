import React, { useState } from 'react';
import './Login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);


  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };


  const validatePasswordStrength = (password) => {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (strongRegex.test(password)) {
      setPasswordStrength('Strong');
    } else {
      setPasswordStrength('Weak');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail && passwordStrength === 'Strong') {
      console.log('Form submitted successfully');
    } else {
      console.log('Please correct form errors');
    }
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsValidEmail(validateEmail(emailValue));
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    validatePasswordStrength(passwordValue);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required autoComplete="off" />
        {!isValidEmail && <p className="error">Please enter a valid email</p>}
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required autoComplete="off" />
        <p>Password Strength: {passwordStrength}</p>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};


export default LoginForm;
