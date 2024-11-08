import React from 'react';
import styles from './MainMenu.css'
import Button from '@mui/material/Button';
import Header from './components/Header';
import Lists from './Lists';
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.body}>
      <Header></Header>
      <div>
        <h2>メインメニュー</h2>
      </div>
      <div>
        <Button
          sx={{ m: 1 }}
          size='large'
          variant="contained"
          onClick={() => {
            navigate('/lists');
          }}
        >新規プロジェクト</Button>
        <Button
          sx={{ m: 1 }}
          size='large'
          variant="contained"
          onClick={() => {
            navigate('/lists');
          }}
        >新規シミュレーション</Button>
        <Button
          sx={{ m: 1 }}
          size='large'
          variant="contained"
          onClick={() => {
            navigate('/lists');
          }}
        >アーカイブ</Button>
      </div>
      <div><input type='text' /></div>
      <div><h2>プロジェクト一覧</h2></div>
      <Lists></Lists>
    </div>

  );
}

export default MainMenu;