import React from "react";
import LoginForm from "../components/LoginForm";
import Nav from "../components/Nav";
import Navbottom from "../components/Navbottom";

export default function Login() {
  return (
    <div className="App">
      <Nav />
      <LoginForm />
      <Navbottom />
    </div>
  );
}
