import { useState } from 'react';

/**
 *
 */
type AuthUser = {
  name: string;
  email: string;
};

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogIn = () => {
    setIsLoggedIn(true);
    setUser({ name: 'Avinash', email: 'avinash@gmail.com' });
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
      <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
      {isLoggedIn ? (
        <div>
          User Name is {user?.name} and email is {user?.email}
        </div>
      ) : null}
    </div>
  );
};

// #endregion

export default LoggedIn;
