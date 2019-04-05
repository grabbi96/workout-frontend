import React from "react";
import classnames from "classnames";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const Input = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled, 
  onFocus,
  onBlur,
  round,
  icon,
  ipl
}) => {
  return (
    <div className={classnames("form-group text-left", 
    {"icon-parent": icon},
    {"input-padding-left":ipl}
    )}>
    {label && <label
        htmlFor={name}
        className="font-weight-light grey-text">
        {label}
    </label>}
    
      <input
        type={type}
        className={classnames("form-control", 
        {"is-invalid": error}, 
        {"round": round}
        )}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {icon && <FontAwesomeIcon icon={icon} className="icon-children" />}
      
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Input;
