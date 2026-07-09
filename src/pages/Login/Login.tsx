import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { AuthLayout } from '@/layout';
import { Button, Input, Alert, Toast } from '@/components/ui';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('user_session', JSON.stringify({ email }));
      setLoading(false);
      navigate('/dashboard', { state: { message: 'Login successful' } });
    }, 600);
  };

  return (
    <AuthLayout>
      {successMessage && (
        <Toast
          message={successMessage}
          type="success"
          onClose={() => setSuccessMessage('')}
        />
      )}

      <div className="w-100">
        <h2 className="auth-title">Log In to Admin Panel</h2>
        <p className="auth-subtitle">Enter your email id and password below</p>

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
            containerClassName="mb-4"
          />

          <Button type="submit" variant="dark" fullWidth isLoading={loading}>
            Log In
          </Button>
        </form>

        <p className="auth-footer-text">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;

