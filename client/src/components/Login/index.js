import { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';
import './Login.scss';

export default function Login() {
  
  const [email, setEmail]  = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const userData = {email, password};
    
    axios.post('/api/users/login', userData)
      .then(res => {
        setUser(res.data.token);
      })
  }

  return (
    <div>
      <h1>Login to Lighthouse Final</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-row">
          <label htmlFor="inputEmail">Email</label>
          <input type="email" className="form-control" id="inputEmail"
            value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="form-row">
          <label htmlFor="inputPassword">Password</label>
          <input type="password" className="form-control" id="inputPassword"
            value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        <div>
          <input type="submit"/>
        </div>
      </form>
    </div>
  );
}
