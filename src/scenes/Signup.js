import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
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
        <form onSubmit={handleFormSubmit}>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </label>
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
          <input type="submit" value="Sign up" />
        </form>
        <Button onClick={handleGoogleLogin}>Sign in with Google</Button>
        <p>
          Already a user? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
