import React from 'react';
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.header}>
            <div onClick={() => {
                navigate('/main');
            }}>システム名</div>
            <div onClick={() => {
                navigate('/main');
            }}>
                <img src='..\logo.svg' alt=""></img>
                <span>小山 竜太</span>
            </div>
        </div>
    );
}

export default Header;