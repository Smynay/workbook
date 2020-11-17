import React from 'react';
import { useAlert } from './alert/AlertContext';

export default function Main() {
  const { toggle } = useAlert();
  return (
    <div>
      <h1>Context hello</h1>
      <button className="btn btn-success" onClick={toggle}>
        Show alert
      </button>
    </div>
  );
}
