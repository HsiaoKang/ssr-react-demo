import React from "react";
import { Link } from "react-router-dom";
import withStyles from 'isomorphic-style-loader/withStyles'

import styles from './styles.css'
const Header = () => {



  return (
    <div className={styles.header}>
      <Link to="/home">home</Link>
      <Link to="/login">login</Link>
    </div>
  );
};


export default withStyles(styles)(Header);
