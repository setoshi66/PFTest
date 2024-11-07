import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

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