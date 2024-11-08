import React from 'react';
import styles from './MainMenu.module.css'
import Button from '@mui/material/Button';
import Header from './components/Header';
import Projects from './components/Projects';
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.body}>
      <Header></Header>
      <div>
        <Button
          sx={{ m: 1 }}
          size='large'
          variant="contained"
          onClick={() => {
            prompt("プロジェクト名を入力して下さい");
          }}
        >新規プロジェクト</Button>
        <Button
          sx={{ m: 1 }}
          size='large'
          variant="contained"
          onClick={() => {
            navigate('/simulation');
          }}
        >新規シミュレーション</Button>
        <Button
          sx={{ m: 1 }}
          size='large'
          variant="contained"
          onClick={() => {
            navigate('/archives');
          }}
        >アーカイブ</Button>
      </div>
      <div><input type='text' /></div>
      <div><h2>プロジェクト一覧</h2></div>
      <Projects></Projects>
    </div>

  );
}

export default MainMenu;