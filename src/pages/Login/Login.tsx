import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { AuthLayout } from '@/layout';
import { Button, Input, Toast } from '@/components/ui';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
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
    const newErrors: { email?: string; password?: string } = {};
    setSuccessMessage('');

    if (!email) {
      newErrors.email = 'Email ID is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
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

        <form onSubmit={handleSubmit} noValidate>
          <Input
            type="email"
            id="email"
            label="Email ID"
            placeholder="Enter your email id"
            value={email}
            error={errors.email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) {
                setErrors((prev) => ({ ...prev, email: undefined }));
              }
            }}
            required
          />

          <Input
            type="password"
            id="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            error={errors.password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) {
                setErrors((prev) => ({ ...prev, password: undefined }));
              }
            }}
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

