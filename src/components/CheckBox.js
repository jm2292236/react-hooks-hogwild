import React from 'react';

// Resusable checkbox component with label included
const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input className="ui toggle checkbox" type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };

  export default Checkbox;
  
