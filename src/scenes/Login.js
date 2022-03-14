import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

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
    console.log("locaUser from LS", localUser);

    //navigate("/");
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
        navigate("/");
      })
      .catch(alert);
    console.log("Here is my user from my parent App component", user);
  };
  return (
    <>
      <h1>Login</h1>
      <hr />
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
