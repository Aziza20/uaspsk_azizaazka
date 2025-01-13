import  { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { registerUser } from '../redux/actions/authActions';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(registerUser ({ username, email, password }));
    };
  
    return (
      <form onSubmit={handleSubmit} className="p-4">
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    );
  };
  
  export default Register;