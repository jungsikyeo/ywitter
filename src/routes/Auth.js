<<<<<<< HEAD
import { authService, firebaseInstance } from "fbase";
=======
>>>>>>> a8941ebaf35da6dec5083bb81ea524226f5e2ec5
import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
=======
>>>>>>> a8941ebaf35da6dec5083bb81ea524226f5e2ec5
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
<<<<<<< HEAD
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if(newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email, 
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch(error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) => {
    const {
      target: {name},
    } = event;
    let provider;
    if(name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if(name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider); 
    console.log(data);
  }
=======
  const onSubmit = (event) => {
    event.preventDefault();
  };
>>>>>>> a8941ebaf35da6dec5083bb81ea524226f5e2ec5
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
<<<<<<< HEAD
        <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
        {error}
      </form>
      <span onClick={toggleAccount}>{newAccount ? "Sign in" : "Create Account"}</span>
      <div>
        <button onClick={onSocialClick} name="google">Continue with Google</button>
        <button onClick={onSocialClick} name="github">Continue with Github</button>
=======
        <input type="submit" value="Log In" />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
>>>>>>> a8941ebaf35da6dec5083bb81ea524226f5e2ec5
      </div>
    </div>
  );
};

export default Auth;
