import React from 'react';
import mountainBackground from '@/assets/mountain_landscape.jpg';
import './AuthLayout.css';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div 
          className="auth-left" 
          style={{ backgroundImage: `url(${mountainBackground})` }}
        />
        <div className="auth-right">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
