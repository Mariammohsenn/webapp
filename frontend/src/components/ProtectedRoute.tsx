import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import API from "../api"; // adjust import

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const token = localStorage.getItem("token");
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    if (!token) {
      setIsAuth(false);
      return;
    }

    API.get("/auth/protected")
      .then(() => setIsAuth(true))
      .catch(() => setIsAuth(false));
  }, [token]);

  if (isAuth === null) {
    return <div>Loading...</div>; // or spinner
  }

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}