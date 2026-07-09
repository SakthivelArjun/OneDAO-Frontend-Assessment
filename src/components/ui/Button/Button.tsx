import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'light' | 'danger' | 'link';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  icon,
  iconPosition = 'left',
  className = '',
  disabled,
  ...props
}) => {
  const buttonClass = [
    'ui-btn',
    `ui-btn-${variant}`,
    `ui-btn-${size}`,
    fullWidth ? 'ui-btn-full-width' : '',
    isLoading ? 'ui-btn-loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClass} disabled={disabled || isLoading} {...props}>
      {isLoading && <span className="ui-btn-spinner" />}
      {!isLoading && icon && iconPosition === 'left' && (
        <span className="ui-btn-icon ui-btn-icon-left">{icon}</span>
      )}
      <span className="ui-btn-text">{children}</span>
      {!isLoading && icon && iconPosition === 'right' && (
        <span className="ui-btn-icon ui-btn-icon-right">{icon}</span>
      )}
    </button>
  );
};

export default Button;
