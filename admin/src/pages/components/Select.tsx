import React, { Fragment } from "react";

interface Props {
  label?: any;
  labelHtmlFor?: any;
  selectedValue?: any;
  children?: any;
  inputRef?: any;
  className?: any;
  error?: any;
  disabled?: boolean;
}

export default function Select({
  label,
  labelHtmlFor,
  selectedValue,
  children,
  inputRef,
  className,
  error,
  disabled,
}: Props) {
  return (
    <Fragment>
      {label && <label htmlFor={labelHtmlFor}>{label}</label>}
      <select
        ref={inputRef}
        className={className}
        value={selectedValue}
        disabled={disabled}
      >
        {children}
      </select>
      {error && <small className=" text-red-500 px-3">{error}</small>}
    </Fragment>
  );
}
