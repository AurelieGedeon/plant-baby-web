import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Box, TextField } from "@mui/material";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../ConnectAuth";

export default function Signup({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [favorites, setFavorites] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  function createUser(uid) {
    const user = {
      email: email.toLowerCase(),
      firstName,
      lastName,
      uid,
      favorites,
    };
    fetch("https://plant-baby-ag.uc.r.appspot.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json)
      .then(() => {
        setUser(user);
      })
      .catch(alert);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        createUser(result.user.uid);
        console.log(result.user);
        navigate("/dashboard");
      })
      .catch(alert);
  };
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        createUser(result.user.uid);
        console.log(result.user);
        navigate("/dashboard");
      })
      .catch(alert);
  };
  return (
    <div class="login-signup">
      <div class="login">
        <h1>Signup</h1>
        <hr />
        <Box
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
            label="First Name"
            type="text"
            autoComplete="off"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            type="text"
            autoComplete="off"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            type="text"
            autoComplete="off"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="off"
            value={password}
            onChange={(event) => setPasword(event.target.value)}
          />
          <Button type="submit">Sign Up</Button>
        </Box>

        <Button onClick={handleGoogleLogin}>Sign in with Google</Button>
        <p>
          Already a user? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
