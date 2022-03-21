import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Box, TextField } from "@mui/material";

import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../ConnectAuth";

export default function Login({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  useEffect(() => {
    const localUser = localStorage.getItem("displayName");
    const avatar = localStorage.getItem("avatar");
    console.log("localUser from LS", localUser);

    if (localUser) setUser({ ...user, displayName: localUser, photo: avatar });
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        navigate("/dashboard");
      })
      .catch(alert);
  };
  const handleGoogleLogin = (event) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);

        localStorage.setItem("displayName", result.user.displayName);
        localStorage.setItem("avatar", result.user.photoURL);
        localStorage.setItem("uid", result.user.uid);

        console.log(result.user.displayName);
        navigate("/dashboard");
      })
      .catch(alert);
    console.log("Here is my user from my parent App component", user);
  };
  return (
    <>
      <h1 style={{ marginTop: "7%" }}>Login</h1>
      <hr />
      {/* <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Email"
          type="text"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="off"
        />
      </Box> */}
      <form onSubmit={handleFormSubmit}>
        <label>
          Email:{" "}
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(event) => setPasword(event.target.value)}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
      <Button onClick={handleGoogleLogin}>Sign in with Google</Button>
      <p>
        Not a user? <Link to="/signup">Sign Up</Link>
      </p>
    </>
  );
}
