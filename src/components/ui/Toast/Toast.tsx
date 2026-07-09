import React, { useEffect } from "react";
import "./Toast.css";

export interface ToastProps {
  message: string;
  type?: "success" | "danger" | "warning" | "info";
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = "success",
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [onClose, duration]);

  const typeIcon = {
    success: "✓",
    danger: "✕",
    warning: "⚠",
    info: "ℹ",
  }[type];

  return (
    <div className={`ui-toast ui-toast-${type}`} role="alert">
      <div className="d-flex align-items-center">
        <span className={`ui-toast-icon ui-toast-icon-${type}`}>{typeIcon}</span>
        <span className="ui-toast-message">{message}</span>
      </div>
      <button
        onClick={onClose}
        className="ui-toast-close"
        aria-label="Close"
      >
        &times;
      </button>
    </div>
  );
};

export default Toast;
