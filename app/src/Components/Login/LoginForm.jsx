import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
  }

  return (
    <section>
      <h1>Login</h1>

      <form action=""onSubmit={handleSubmit}> 
        <input
          type="text"
          value={username}
          onChange={({ target }) => {
            setUsername(target.value);
          }}
        />

        <input 
            type="password" 
            value={password}
            onChange={({target}) => {
                setPassword(target.value)
            }}
        />

        <button>Entrar</button>

      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
