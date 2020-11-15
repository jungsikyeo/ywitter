<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> a8941ebaf35da6dec5083bb81ea524226f5e2ec5
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
<<<<<<< HEAD
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);        
      }
      setInit(true);
    });
  }, [])
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing...."}
=======
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
>>>>>>> a8941ebaf35da6dec5083bb81ea524226f5e2ec5
      <footer>&copy; {new Date().getFullYear()} Ywitter</footer>
    </>
  );
}

export default App;
