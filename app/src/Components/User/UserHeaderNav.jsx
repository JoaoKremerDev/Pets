import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context/useContext";
import MinhasFotos from "../../Assets/feed.svg";
import Estatisticas from "../../Assets/estatisticas.svg";
import AdicionarFoto from "../../Assets/adicionar.svg";
import Sair from "../../Assets/sair.svg";

import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  return (
    <nav>
      <NavLink to="/conta">
        <img src={MinhasFotos} style={{ display: "inline-block" }} />
        Minhas Fotos
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <img src={Estatisticas} style={{ display: "inline-block" }} />
        Estatísticas
      </NavLink>
      <NavLink to="/conta/postar">
        <img src={AdicionarFoto} style={{ display: "inline-block" }} />
        Adicionar Foto
      </NavLink>
      <button onClick={userLogout}>
        <img src={Sair} style={{ display: "inline-block" }} />
        Sair
      </button>
    </nav>
  );
};

export default UserHeaderNav;
