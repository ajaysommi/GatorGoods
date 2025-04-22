import '../logout.css';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  return (
    <div className="logout-page">
      <h1>You have successfully logged out. <br />Later Gator!</h1>
      <p>Click below to return to the login page.</p>
      <button onClick={() => navigate('/')}>Back to Login</button>
    </div>
  );
};

export default Logout;
