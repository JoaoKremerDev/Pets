import '../App.css'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Dogs from '../Assets/dogs.svg';
import {UserContext} from '../Context/useContext';
import { useContext } from 'react';


const Header = () => {
  const context = useContext(UserContext)
  console.log(context)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label="Pets - Home">
          <img src={Dogs} alt="" />
        </Link>
        <Link className={styles.login} to="/login">Login / Criar</Link>
        {context.usuario}
      </nav>
    </header>
  )
}

export default Header;
