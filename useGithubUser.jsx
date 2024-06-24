import { useState, useEffect } from 'react';

const useGithubUser = (username) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (username) {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((userData) => setUser(userData))
        .catch((error) => console.error('Errore durante la chiamata API:', error));
    }
  }, [username]);

  return user;
};

export default useGithubUser;