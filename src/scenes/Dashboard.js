import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

export default function Dashboard({ user }) {
  console.log(user); //email, displayName, photoURL

  return (
    <>
      <h1>Welcome</h1>
      <h2>Welcome, {user.firstName || user.displayName}!</h2>
    </>
  );
}
