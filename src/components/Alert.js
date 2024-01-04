import React from 'react';

export default function Alert(props) {
  const capitalize = (word) => {
    if (typeof word === 'string') {
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    } else {
      return ''; // Or handle it in a way that makes sense for your use case
    }
  };

  return (
    props.alert &&
    (
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )
  );
}



