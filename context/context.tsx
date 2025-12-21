import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

type User = Record<string, any> | null;

export type AppContextType = {
  navigate: ReturnType<typeof useNavigate>;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  showUserLogin: boolean;
  setShowUserLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType | null>(null);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>(null);
  const [showUserLogin, setShowUserLogin] = useState<boolean>(false);

  const value: AppContextType = {
    navigate,
    user,
    setUser,
    showUserLogin,
    setShowUserLogin,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return ctx;
};

export default AppProvider;
