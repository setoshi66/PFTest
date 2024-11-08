import React from 'react';
import styles from './Login.module.css'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.login}>
      <h2>システム名</h2>
      <div><input type='text' placeholder='ID入力'></input></div>
      <div><input type='password' placeholder='パスワード入力'></input></div>
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
      <div>
      <span>アカウント新規作成</span>
      <span>パスワードを忘れた場合</span>
      </div>
    </div>
  );
}

export default Login;