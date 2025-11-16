import React from 'react';

function Checkbox({ children, ...props }) {
  return (
    <label className="flex items-center cursor-pointer">
      <input id={props.id} type="checkbox" className="form-checkbox h-10" {...props} />
      <span className="ml-2">{children}</span>
    </label>
  );
}

export default Checkbox;
