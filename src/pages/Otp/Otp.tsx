import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '@/layout';
import { Button, Alert } from '@/components/ui';
import './Otp.css';

const Otp: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    const storedEmail = localStorage.getItem('registered_email') || 'your registered email';
    setEmail(storedEmail);

    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value !== '' && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      if (otp[index] === '' && index > 0) {
        newOtp[index - 1] = '';
        setOtp(newOtp);
        if (inputRefs.current[index - 1]) {
          inputRefs.current[index - 1].focus();
        }
      } else {
        newOtp[index] = '';
        setOtp(newOtp);
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    if (!/^\d{6}$/.test(pastedData)) return;

    const digits = pastedData.split('');
    setOtp(digits);

    if (inputRefs.current[5]) {
      inputRefs.current[5].focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const otpCode = otp.join('');
    if (otpCode.length < 6) {
      setError('Please enter the full 6-digit OTP code.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('user_session', JSON.stringify({ email }));
      setLoading(false);
      navigate('/dashboard');
    }, 600);
  };

  return (
    <AuthLayout>
      <div className="w-100 text-center">
        <h2 className="auth-title">Verify your email</h2>
        <p className="auth-subtitle mb-4">
          Enter the OTP from your registered email id
        </p>

        {error && (
          <Alert variant="danger" className="py-2 px-3 mb-3 small text-start">
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-between gap-2 mb-4">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                type="text"
                maxLength={1}
                className="otp-box form-control text-center fw-semibold fs-5"
                value={digit}
                ref={(el) => {
                  if (el) inputRefs.current[idx] = el;
                }}
                onChange={(e) => handleChange(e.target, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                onPaste={handlePaste}
                required
              />
            ))}
          </div>

          <Button type="submit" variant="dark" fullWidth isLoading={loading} className="mt-2">
            Proceed
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Otp;
