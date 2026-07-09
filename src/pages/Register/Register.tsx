import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthLayout } from '@/layout';
import { Button, Input, Alert } from '@/components/ui';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('registered_email', email);
      setLoading(false);
      navigate('/otp');
    }, 600);
  };

  return (
    <AuthLayout>
      <div className="w-100">
        <h2 className="auth-title">Register to Admin Panel</h2>
        <p className="auth-subtitle">Enter your details below to create an account</p>

        {error && (
          <Alert variant="danger" className="py-2 px-3 mb-3 small">
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            id="email"
            label="Email ID"
            placeholder="Enter your email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            type="password"
            id="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Input
            type="password"
            id="confirmPassword"
            label="Confirm Password"
            placeholder="Enter your confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            containerClassName="mb-4"
          />

          <Button type="submit" variant="dark" fullWidth isLoading={loading}>
            Register
          </Button>
        </form>

        <p className="auth-footer-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;

