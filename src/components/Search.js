import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { GithubContext } from '../context/github/githubContext';

export const Search = () => {
  const [value, setValue] = useState('');
  const { show } = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onSubmit = (event) => {
    if (event.key !== 'Enter') {
      return;
    }

    github.clearUsers();

    if (value.trim()) {
      github.search(value.trim());
    } else {
      show('Complete the search value!');
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter username..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  );
};
