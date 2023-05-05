import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/ticket.css";
import { useNavigate } from "react-router-dom";


const Ticket = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [summary, setSummary] = useState();

  const fetchData = async () => {
    let showSumm = await fetch(`https://api.tvmaze.com/shows/${id}`);
    let showSummData;
    if (showSumm) {
      showSummData = await showSumm.json();
      setSummary(showSummData);
      // console.log(showSummData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [form, setForm] = useState({
    username: "",
    email: "",
    ph: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/");
  };
  useEffect(() => {
    setForm(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div className="t_main">
      <h1>{summary?.name}</h1>
      <div className="container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="username"
              type="text"
              placeholder="Enter your name"
              value={form.username}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={form.email}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="ph"
              type="text"
              placeholder="Enter your phone no."
              value={form.ph}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control name="date" type="Date" />
          </Form.Group>

          <Form.Select aria-label="Default select example">
            <option>Select the Show Time</option>
            <option value="1">12.00pm - 3.00pm</option>
            <option value="2">3.00pm - 5.00pm</option>
            <option value="3">5.00pm - 8.00pm</option>
          </Form.Select>

          <br />
          <div className="footer">
            <button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Ticket;
