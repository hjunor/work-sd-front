import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
import ico from '../../assets/ico.ico';

const Login = () => {
  const [user, setuser] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = user;
    if (!username.length) return;

    localStorage.setItem('username', username);

    history.push('/timeline');
  };
  const handleInputChange = (e) => {
    setuser(e.target.value);
  };

  return (
    <div className="login-wrapper">
      <img src={ico} alt="" />
      <form onSubmit={handleSubmit}>
        <input
          value={user}
          onChange={handleInputChange}
          placeholder="Nome de Usuario"
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
