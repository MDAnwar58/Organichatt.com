import React, { Fragment } from "react";

export default function Input({
  label,
  labelHtmlFor,
  type,
  Value,
  className,
  inputRef,
  onChange,
  onClick,
  disabled,
  placeholder,
  error,
  errorHandler,
}: {
  label?: any;
  labelHtmlFor?: any;
  type?: any;
  Value?: any;
  className?: any;
  inputRef?: any;
  onChange?: any;
  onClick?: any;
  disabled?: boolean;
  placeholder?: any;
  error?: any;
  errorHandler?: any;
}) {
  return (
    <Fragment>
      {label && <label htmlFor={labelHtmlFor}>{label}</label>}
      <input
        type={type}
        ref={inputRef}
        onChange={onChange}
        onClick={onClick}
        className={className}
        defaultValue={Value}
        disabled={disabled}
        placeholder={placeholder}
      />
      {error && errorHandler === true && (
        <small className=" text-red-500 px-3">{error}</small>
      )}
      {error && <small className=" text-red-500 px-3">{error}</small>}
    </Fragment>
  );
}
