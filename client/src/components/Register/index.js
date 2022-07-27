import { useState } from 'react';

import axios from 'axios';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();
    console.log("form submitted")  

    const user = {
      firstName,
      lastName,
      email,
      password
    };

    const res = await axios.post('/api/users/register', user);
    
    console.log(res.data);
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegistration}>
        <div>
          <label htmlFor="first-name">First Name</label>
          <input 
            type="text" 
            name="first-name" 
            id="first-name" 
            value={firstName} 
            onChange={e => setFirstName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="last-name">Last Name</label>
          <input 
            type="text" 
            name="last-name" 
            id="last-name"
            value={lastName} 
            onChange={e => setLastName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            value={email} 
            onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password"
            value={password} 
            onChange={e => setPassword(e.target.value)} />
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  )
}
