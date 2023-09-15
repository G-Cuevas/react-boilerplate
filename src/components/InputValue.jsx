import { useState } from "react";
import PropTypes from "prop-types";

export const InputValue = ({ onEnter }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length <= 1) return;
    onEnter(value.trim());
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add task"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};


InputValue.propTypes = {
  onEnter: PropTypes.func.isRequired,
};