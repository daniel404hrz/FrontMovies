import { useDispatch, useSelector } from "react-redux";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { setDelUser } from "../../redux/userSlice";
import Cookies from "js-cookie";
export default function Navbar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logout = () => {
    
  
    // Elimina la cookie 'localSession'
    Cookies.remove('localSession');
  
    // Actualiza el estado de Redux llamando a la acción setUser con null o cualquier otro valor que indique que el usuario está deslogueado
    dispatch(setDelUser(true));
  
   
  };
  return (
    <header className={styles.nav_box}>
      
      
      <nav className={styles.links_box}>
      <p className={styles.title}>HappyMovies</p>
        <ul>
          
          <li>
            <Link to="/" className={styles.link}>Home</Link>
          </li>
          <li>
            <Link to="/compras" className={styles.link}>compras</Link>
          </li>
          <li>
            <Link to="/rentas" className={styles.link}>Rentas</Link>
          </li>
        </ul>
        <div className={styles.button_box}>
        
        {!user.login ?
        <>
        <Link to="/login" ><button>Iniciar sesión</button></Link>
          <Link to="/login/create" ><button> Registrase</button></Link>
        </>
          
          :  <>
          <Link to="/user" ><button>🙍‍♂️ {user.name}</button></Link>
          <Link to="/" ><button onClick={logout}>Cerrar sesión</button></Link>
          </>
        }
        
        </div>
        
      </nav>
    </header>
  );
}
