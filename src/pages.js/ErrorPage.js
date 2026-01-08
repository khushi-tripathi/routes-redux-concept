import React, { useEffect } from "react";
import { useNavigate } from "react-router";

function ErrorPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/"); // navigate one page back if we use -1, -2 for 2 page back
    }, 3000);
  }, []);
  return <h1>Something Went Wrong!!</h1>;
}

export default ErrorPage;
