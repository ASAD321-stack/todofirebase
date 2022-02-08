import React from "react";
import Button from "@mui/material/Button";

import { auth } from "../firebase_config";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

export const Logout = () => {
  const navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
    navigate("/signin");
  };
  return (
    <div>
      <Button
        type="submit"
        style={{ marginTop: "10px", marginLeft: "20px",backgroundColor:"red" }}
        onClick={logout}
        variant="contained"
      >
       
        Logout
      </Button>
    </div>
  );
};
