import React from 'react';
import { useAlert } from './alert/AlertContext';

export default function Main() {
  const { show } = useAlert();
  return (
    <div>
      <h1>Context hello</h1>
      <button className="btn btn-success" onClick={() => show('Main.js text')}>
        Show alert
      </button>
    </div>
  );
}
