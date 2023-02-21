import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const navigate = useNavigate()

  const [flag, setFlag] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("sanskarPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");


    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setFlag(false);
      navigate('/home')
    }
  }

  useEffect(() => {
    document.title = "login"
  },[])

  return (
    <div className="d-grid justify-content-center align-items-center" style={{width: "100%", height: "100vh" }}>
      <form onSubmit={handleLogin} style={{width: "450px", background: "#ffffff", boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)", padding: "40px 55px 45px 55px", borderRadius: "15px", transition: "all .3s"}}>
      <div className="d-flex">
      <Link to="/" className="d-flex align-items-center">Back</Link>
      <span className="d-flex align-items-center justify-content-center fw-bold" style={{width: "100%", fontSize:"20px"}}>Login</span>
      </div>
        <div className="form-group mb-2">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => setEmaillog(event.target.value)
            }
          />
        </div>

        <div className="form-group mb-2">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event) => setPasswordlog(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Login
        </button>

        {flag && (
          <Alert color="primary" variant="warning">
            Fill correct Info else keep trying.
          </Alert>
        )}
      </form>
    </div>
  );
}

export default Login;
