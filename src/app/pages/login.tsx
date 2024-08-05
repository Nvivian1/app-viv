import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

const Login = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username);
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
        <h2 className="mb-4">Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border mb-4"
          placeholder="Username"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
