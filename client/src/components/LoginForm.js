import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform API call to validate the user credentials
    // If the credentials are valid, navigate to the next page
    // If the credentials are invalid, set an error message
  };
  return (
    <div className="loginForm">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div>{error}</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
