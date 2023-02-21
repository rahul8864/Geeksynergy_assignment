import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import './Registration.css'

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate()



  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !profession) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem( "sanskarPassword", JSON.stringify(password));
      navigate('/login')
    }
  }

  return (
    <div className="d-grid justify-content-center align-items-center" style={{width: "100%", height: "100vh" }}>
      <form onSubmit={handleFormSubmit} style={{width: "450px", background: "#ffffff", boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)", padding: "40px 55px 45px 55px", borderRadius: "15px", transition: "all .3s"}}>
        <h3 className="text-center">Register</h3>
        <div className="form-group mb-2">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Full Name"
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label>Email</label>
          <input
            type="email"
            className="form-control "
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label>Phone No.</label>
          <input
            type="Phone"
            className="form-control"
            placeholder="Enter contact no"
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label>Choose your Profession</label>
          <Form.Control
            as="select"
            onChange={(event) => setProfession(event.target.value)}
          >
            <option>Select</option>
            <option>Artist</option>
            <option>Photographer</option>
            <option>Team Player</option>
            <option>React.js Developer</option>
          </Form.Control>
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>
        <span className="forgot-password ms-5">
          Already registered
          <Link to='/login'> log in?</Link>
        </span>
        {flag && (
          <Alert color="primary" variant="danger">
            I got it you are in hurry! But every Field is important!
          </Alert>
        )}
      </form>
    </div>
  );
}

export default Registration;
