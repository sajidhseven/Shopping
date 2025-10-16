import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase"; 
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Store product user tried to add before login
  const [pendingAction, setPendingAction] = useState(null);

  // Firebase observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Register
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ✅ Login
  const login = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  };

  // ✅ Logout clears session
  const logout = async () => {
    await signOut(auth);
    setPendingAction(null); // clear pending action
  };

  // ✅ Set pending action (product to add after login)
  const setPendingProductAction = (action) => {
    setPendingAction(action); // action: { type: "cart"/"wishlist", product }
  };

  // ✅ Clear pending action after performing it
  const clearPendingAction = () => setPendingAction(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        pendingAction,
        setPendingProductAction,
        clearPendingAction,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);
