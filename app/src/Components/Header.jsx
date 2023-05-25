import "../App.css";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Dogs from "../Assets/dogs.svg";
import { useContext } from "react";
import { UserContext } from "../Context/useContext";

const Header = () => {
  const { data, userLogout} = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Pets - Home">
          <img src={Dogs} alt="" />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
        <button onClick={userLogout}>Sair</button>
      </nav>
    </header>
  );
};

export default Header;
