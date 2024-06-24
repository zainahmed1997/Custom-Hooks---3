import React, { useState } from 'react';
import GithubUser from './GithubUser';
import useGithubUser from './useGithubUser';

const GithubUsers = () => {
  const [username, setUsername] = useState('');
  const user = useGithubUser(username);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(e.target.username.value);
  };

  return (
    <div>
      <h2>User Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Inserisci username GitHub" />
        <button type="submit">Cerca</button>
      </form>
      <ul>
        {user && <GithubUser user={user} />}
      </ul>
    </div>
  );
};

export default GithubUsers