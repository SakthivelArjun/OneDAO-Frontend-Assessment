import React from 'react';
import './Alert.css';

export interface AlertProps {
  variant?: 'success' | 'danger' | 'warning' | 'info';
  onClose?: () => void;
  className?: string;
  children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  onClose,
  className = '',
  children
}) => {
  const alertClass = [
    'ui-alert',
    `ui-alert-${variant}`,
    onClose ? 'ui-alert-dismissible' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={alertClass} role="alert">
      <div className="ui-alert-content">
        {children}
      </div>
      {onClose && (
        <button type="button" className="ui-alert-close-btn" onClick={onClose} aria-label="Close">
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
