import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import logoUrl from '../assets/logo2.png';
import Alert from '../components/Alert';

interface FormData {
  first_name: string;
  username: string;
  email: string;
  password: string;
  date_of_birth: string;
}

export default function SignUp() {
  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    username: '',
    email: '',
    password: '',
    date_of_birth: ''
  });
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
    setAlert(null); // Limpa alertas anteriores
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        navigate('/sing-in');
      } else {
        setAlert({ message: data.detail || 'Cadastro falhou', color: 'red' });
      }
    } catch (error) {
      setAlert({ message: 'Erro de rede', color: 'red' });
      console.error('Erro:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1a1a1a]">
      <div className="bg-white rounded-[40px] p-8 w-[400px]">
        <img src={logoUrl} alt="Logo" className="w-[100px] h-[100px] mx-auto mb-8" />
        <h1 className="text-3xl font-bold text-center font-roboto">Create new Account</h1>
        <p className="text-center text-gray-600 font-roboto">Already Registered? Log in here.</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div>
            <label className="block mb-2 text-sm font-bold font-roboto text-gray-600">NAME</label>
            <input
              type="text"
              name="first_name"
              className="w-full p-3 rounded-lg bg-gray-200 font-roboto"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold font-roboto text-gray-600">USERNAME</label>
            <input
              type="text"
              name="username"
              className="w-full p-3 rounded-lg bg-gray-200 font-roboto"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold font-roboto text-gray-600">EMAIL</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 rounded-lg bg-gray-200 font-roboto"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold font-roboto text-gray-600">PASSWORD</label>
            <div className="relative">
              <input
                type="password"
                name="password"
                className="w-full p-3 rounded-lg bg-gray-200 font-roboto"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600">
                <i className="fas fa-eye"></i>
              </span>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold font-roboto text-gray-600">DATE OF BIRTH</label>
            <input
              type="date"
              name="date_of_birth"
              className="w-full p-3 rounded-lg bg-gray-200 font-roboto"
              value={formData.date_of_birth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-sm">
            <input type="checkbox" name="terms" className="mr-2" required />
            <span className="font-roboto">I have read and agree to the </span>
            <a href="#" className="text-blue-500 font-roboto">
              Terms of Use
            </a>
            <span className="font-roboto"> and </span>
            <a href="#" className="text-blue-500 font-roboto">
              Privacy Policy
            </a>
            <span className="font-roboto"> of the platform.</span>
          </div>
          <div>
            <button type="submit" className="w-full p-3 rounded-lg bg-black text-white font-bold font-roboto">
              Sign up
            </button>
          </div>
          {alert && <Alert message={alert.message} color={alert.color} />}
        </form>
      </div>
    </div>
  );
}