/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useReducer, useMemo } from "react";
import { useRouter } from "next/navigation";
import axios from "../../config/axios";
import { isValidToken, setSession } from "../../utils/jwt";
import AuthReducer from "./AuthContext.reducer";
import { Alert } from "@mui/material";
import { BACKEND_BASE_URL } from "@/config";

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

const INITIALIZE = "INITIALIZE";
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";

interface AuthProviderProps {
  children: React.ReactNode;
}

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: {},
};
const AuthContext = createContext(initialState);
export const useAuth: any = () => React.useContext(AuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const router = useRouter();

  useEffect(() => {
    const initialize = async () => {
      try {
        const storedLogin = localStorage.getItem("login");

        if (storedLogin) {
          const info = JSON.parse(storedLogin);
          dispatch({
            type: INITIALIZE,
            payload: {
              isInitialized: true,
              isAuthenticated: true,
              user: info,
            },
          });
        } else {
          dispatch({
            type: INITIALIZE,
            payload: {
              isInitialized: false,
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error("Error during initialization:", err);
        dispatch({
          type: INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const signIn = async (email_id: any, password: any) => {
    try {
      const response = await axios.post(
        `${BACKEND_BASE_URL}/api/medical/login`,
        {
          email_id,
          password,
        }
      );

      const user = response.data;
      localStorage.setItem("login", JSON.stringify(user));
      dispatch({
        type: SIGN_IN,
        payload: {
          user: user,
          isAuthenticated: true,
        },
      });

      return router.push("/dashboard");
    } catch (err: any) {
      console.error("Error during sign-in:", err);
      dispatch({
        type: SIGN_IN,
        payload: {
          isAuthenticated: false,
          validationErrors: err.error,
        },
      });
    }
  };

  const signOut = async () => {
    try {
      setSession(null);
      dispatch({ type: SIGN_OUT });

      localStorage.setItem("login", "user logout");
    } catch (err) {
      console.error("Error during sign-out:", err);
    }
  };

  const contextValue = useMemo(
    () => ({
      ...state,
      method: "jwt",
      signIn,
      signOut,
    }),
    [state]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
