import React from "react";
import "./Input.css";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  as?: "input" | "textarea" | "select";
  options?: Array<{ value: string | number; label: string }>;
  containerClassName?: string;
  labelClassName?: string;
  rows?: number;
  cols?: number;
}

export const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  InputProps
>(
  (
    {
      label,
      error,
      helperText,
      as = "input",
      options = [],
      containerClassName = "",
      labelClassName = "",
      className = "",
      id,
      children,
      ...props
    },
    ref,
  ) => {
    const inputId = id || `ui-input-${Math.random().toString(36).substr(2, 9)}`;

    const wrapperClass = ["ui-input-wrapper", containerClassName]
      .filter(Boolean)
      .join(" ");

    const controlClass = [
      "ui-input-control",
      error ? "ui-input-control-error" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const renderControl = () => {
      switch (as) {
        case "textarea":
          return (
            <textarea
              id={inputId}
              className={controlClass}
              ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
              {...(props as unknown as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          );
        case "select":
          return (
            <select
              id={inputId}
              className={controlClass}
              ref={ref as React.ForwardedRef<HTMLSelectElement>}
              {...(props as unknown as React.SelectHTMLAttributes<HTMLSelectElement>)}
            >
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
              {children}
            </select>
          );
        case "input":
        default:
          return (
            <input
              id={inputId}
              className={controlClass}
              ref={ref as React.ForwardedRef<HTMLInputElement>}
              {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
            />
          );
      }
    };

    return (
      <div className={wrapperClass}>
        {label && (
          <label
            htmlFor={inputId}
            className={`ui-input-label ${labelClassName}`}
          >
            {label}
          </label>
        )}
        <div className="ui-input-container">{renderControl()}</div>
        {error && <span className="ui-input-error-text">{error}</span>}
        {!error && helperText && (
          <span className="ui-input-helper-text">{helperText}</span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
