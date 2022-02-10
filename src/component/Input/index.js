import React from "react";

const Input = (props) => {
  const { type, name, id, placeholder, label, error, required } = props;
  return (
    <div>
      <div class="form-group">
        <label for={id}>
          {label}
          {required && <span style={{ color: "red" }}>*</span>}
        </label>
        <input
          type={type}
          class="form-control"
          name={name}
          id={id}
          aria-describedby="emailHelp"
          placeholder={placeholder}
          {...props}
        ></input>
        {error && (
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        )}
      </div>
    </div>
  );
};

export default Input;
