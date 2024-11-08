import React from 'react';
import styles from './Header.css'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.header}>
            <span onClick={() => {
                navigate('/main');
            }}>システム名</span>
            <span onClick={() => {
                navigate('/main');
            }}>画像</span>
            <span>小山</span>
        </div>
    );
}

export default Header;