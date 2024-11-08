import React from 'react';
import styles from './App.module.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import MainMenu from './MainMenu';
import Simulation from './components/Simulation';
import Archives from './components/Archives';

const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" component={Login} /> */}
          {/* <Route path="/main" component={MainMenu} /> */}
          <Route path="" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<MainMenu />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/archives" element={<Archives />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;