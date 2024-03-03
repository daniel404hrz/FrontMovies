import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
export default function Navbar() {
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
        <Link to="/login" ><button>Iniciar sesión</button></Link>
        <Link to="/login/create" ><button>Registrase</button></Link>
        </div>
        
      </nav>
    </header>
  );
}
