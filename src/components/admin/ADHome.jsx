import { useSelector } from "react-redux";
import styles from "./ADHome.module.css"
import MovTable from "./tables/MovTable";
import Panel from "./panel/Panel";
export default function ADHome() {
    const user = useSelector((state) => state.user);
  if (user.userLocal.rol === "admin") {
    return (
      <div className={styles.home_box}>
        
        <Panel></Panel>
        <h1 className={styles.title}>Administración</h1>
        
        
        <MovTable/>
      </div>
    );
  } else {
    return (
      <div className={styles.NoAccess_box}>
        <h1>No posee los permisos requeridos ❌❗</h1>
      </div>
    );
  }
}
