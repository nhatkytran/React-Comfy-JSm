import { createContext, useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = createContext();

function useUserContext() {
  return useContext(UserContext);
}

function UserProvider({ children }) {
  const { user, loginWithRedirect, logout } = useAuth0();
  const [appUser, setAppUser] = useState(undefined);

  const value = {
    appUser,
    loginWithRedirect,
    logout,
  };

  useEffect(() => {
    setAppUser(user);
  }, [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { useUserContext };
export default UserProvider;
