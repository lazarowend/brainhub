import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate para redirecionamento
import logoUrl from '../assets/logo2.png';
import Alert from '../components/Alert';

interface FormData {
  username: string;
  password: string;
}

export default function SignIn() {
  const [formData, setFormData] = useState<FormData>({ username: '', password: '' });
  const [error, setError] = useState<string>('');
  const [alert, setAlert] = useState<{ message: string; color: string } | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/auth/login', {  // Certifique-se de que a URL corresponde ao seu endpoint de login
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        navigate('/dashboard');
      } else {
        setAlert({ message: data.detail || 'Login falhou', color: 'red' });
      }
    } catch (error) {
      setAlert({ message: 'Erro de rede' || 'Erro de rede', color: 'red' });
      console.error('Error:', error);
    }
  };

  return (

    <div className="min-h-screen bg-[#1E2222] flex flex-col items-center justify-center">
      {alert && <Alert message={alert.message} color={alert.color} />}

      <div className="bg-white w-[400px] p-8 rounded-[60px] shadow-lg">
        <div className="flex justify-center mb-6">
          <img
            src={logoUrl}
            alt="Logo of a brain"
            className="w-[220px] h-[120px]"
          />
        </div>
        <h2 className="text-center text-gray-600 font-semibold mb-6 font-sans">
          Sign in to continue.
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label
            className="block text-gray-500 font-semibold mb-2 font-sans"
            htmlFor="username"
          >
            USERNAME/EMAIL
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full p-3 mb-4 rounded-[20px] bg-gray-200"
            value={formData.username}
            onChange={handleChange}
          />
          <label
            className="block text-gray-500 font-semibold mb-2 font-sans"
            htmlFor="password"
          >
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-3 mb-6 rounded-[20px] bg-gray-200"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-[20px] font-semibold font-sans"
          >
            Log in
          </button>
        </form>
        <div className="text-center mt-6 font-sans">
          <a href="#" className="text-gray-400 text-sm">
            Forgot Password?
          </a>
        </div>
        <div className="text-center mt-2 font-sans">
          <a href="/sing-up" className="text-gray-400 text-sm">
            Signup !
          </a>
        </div>
      </div>
    </div>
  );
}