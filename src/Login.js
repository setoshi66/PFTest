// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>ユーザー名<input type='text'></input></div>
      <div>パスワード<input type='password'></input></div>
      <div>
        <Button
          sx={{ m: 1 }}
          size='large'
          variant="contained"
          onClick={() => {
            navigate('/main');
          }}
        >ログイン</Button>
      </div>
    </div>
  );
}

export default Login;