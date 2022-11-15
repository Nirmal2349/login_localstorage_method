import React, { useEffect, useRef, useState } from "react";
import { Home } from "./home";

function Registration() {
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const username = useRef();
  const password = useRef();

  const [home, setHome] = useState(false);

  const [show, setShow] = useState(false);

  const localSignup = localStorage.getItem("signup");

  const localUsername = localStorage.getItem("username");

  const localPassword = localStorage.getItem("password");

  useEffect(() => {
    if (localSignup) {
      setHome(true);
    }
    if (localUsername) {
      setShow(true);
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (
      firstname.current.value &&
      lastname.current.value &&
      email.current.value &&
      username.current.value &&
      password.current.value
    ) {
      localStorage.setItem("firstname", firstname.current.value);
      localStorage.setItem("lastname", lastname.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("username", username.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signup", username.current.value);
      alert("account created successfully!!1");
      window.location.reload();
    }
  };

  const handleLogin = () => {
    if (
      username.current.value === localUsername &&
      password.current.value === localPassword
    ) {
      localStorage.setItem("signup", username.current.value);
      window.location.reload();
    } else {
      alert("plese enter valid username and password");
    }
  };

  return (
    <div>
      {home ? (
        <Home />
      ) : show ? (
        <form>
          <p>Login</p>
          <div className="container">
            <div className="input_container">
              <input placeholder="UserName" type="text" ref={username} />
            </div>
            <div className="input_container">
              <input placeholder="Password" type="password" ref={password} />
            </div>
            <button onClick={handleLogin}>Login</button>
          </div>
        </form>
      ) : (
        <form>
          <div className="container">
            <div className="input_container">
              <input placeholder="First Name" type="text" ref={firstname} />
            </div>
            <div className="input_container">
              <input placeholder="Last Name" type="text" ref={lastname} />
            </div>
            <div className="input_container">
              <input placeholder="Email" type="Email" ref={email} />
            </div>
            <div className="input_container">
              <input placeholder="UserName" type="text" ref={username} />
            </div>
            <div className="input_container">
              <input placeholder="Password" type="password" ref={password} />
            </div>
            <button onClick={handleClick}>signup</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Registration;
