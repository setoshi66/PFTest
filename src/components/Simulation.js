import React from 'react';
import styles from './Simulation.module.css'
import Button from '@mui/material/Button';
import Header from './Header';
import skelton1 from ".//skelton1.png";

// const rows = [
//   { id: 1, name: 'シミュレーション1', proccess: '計算済み', favorite: true },
//   { id: 2, name: 'シミュレーション2', proccess: '計算済み', favorite: false },
//   { id: 3, name: 'シミュレーション3', proccess: '計算済み', favorite: true },
//   { id: 4, name: 'シミュレーション4', proccess: '計算済み', favorite: false },
//   { id: 5, name: 'シミュレーション5', proccess: '計算済み', favorite: true },
//   { id: 6, name: 'シミュレーション6', proccess: '中断', favorite: false },
//   { id: 7, name: 'シミュレーション7', proccess: 'キャンセル', favorite: true },
//   { id: 8, name: 'シミュレーション8', proccess: '計算中', favorite: false },
//   { id: 9, name: 'シミュレーション9', proccess: '未計算', favorite: true },
// ];

const Simulation = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.body}>
        <div className={styles.tank}>
          <img src={skelton1} alt="tank"></img>
        </div>
        <div className={styles.parameters}>
          <div className={styles.tabs}>            
            <Button
              sx={{ m: 1 }}
              variant="outlined"
            >反応層</Button>
            <Button
              sx={{ m: 1 }}
              variant="outlined"
            >バッフル板</Button>
            <Button
              sx={{ m: 1 }}
              variant="outlined"
            >換気装置(前)</Button>
            <Button
              sx={{ m: 1 }}
              variant="outlined"
            >換気装置(上)</Button>
          </div>
          <div>☆</div>
          <div>
            <span>反応層のタイプ</span>
            <input type='select' />
          </div>
          <div>
            <span>反応層の幅(mm)</span>
            <span>高さ</span><input type='number' />
            <span>幅</span><input type='number' />
          </div>
          <div>
            <span>上部空間(mm)</span>
            <span>高さ</span><input type='number' />
            <span>幅</span><input type='number' />
          </div>
          <div>
            <span>開放部(mm)</span>
            <span>高さ</span><input type='number' />
            <span>幅</span><input type='number' />
          </div>
          <div>
            <span>設計水深</span>
            <input type='number' />
          </div>
          <div>
            <span>開放部(mm)</span>
            <span>高さ</span><input type='number' />
            <span>幅</span><input type='number' />
          </div>
          <div>
            <span>開放部(mm)</span>
            <span>高さ</span><input type='number' />
            <span>幅</span><input type='number' />
          </div>
          <div>
            <span>梁の形状</span>
            <input type='number' />
          </div>
          <div>
            <Button
              sx={{ m: 1 }}
              variant="contained"
            >戻る</Button>
            <Button
              sx={{ m: 1 }}
              variant="contained"
            >次へ</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Simulation;