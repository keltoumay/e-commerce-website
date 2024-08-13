mport React, { useState } from 'react';
import authService from '../services/authService';

function RegisterPage() {
	  const [name, setName] = useState('');
	  const [email, setEmail] = useState('');
	  const [password, setPassword] = useState('');

	  const handleSubmit = async (e) => {
		      e.preventDefault();
		      try {
			            await authService.register(name, email, password);
			            alert('Registration successful');
			          } catch (error) {
					        console.error('Registration failed:', error);
					      }
		    };

	  return (
		      <div>
		        <h1>Register Page</h1>
		        <form onSubmit={handleSubmit}>
		          <input
		            type="text"
		            placeholder="Name"
		            value={name}
		            onChange={(e) => setName(e.target.value)}
		          />
		          <input
		            type="email"
		            placeholder="Email"
		            value={email}
		            onChange={(e) => setEmail(e.target.value)}
		          />
		          <input
		            type="password"
		            placeholder="Password"
		            value={password}
		            onChange={(e) => setPassword(e.target.value)}
		          />
		          <button type="submit">Register</button>
		        </form>
		      </div>
		    );
}

export default RegisterPage;
