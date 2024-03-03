
import styles from "./home.module.css"

import Movies from '../cards/movies/Movies';
export default function Home ({movies}) {
  

  

  return (
    <div className={styles.home_box}>
      <h1 className={styles.title}>Lista de Películas</h1>
      <div className={styles.movies_box}>
      <Movies movies={movies}></Movies>
      </div>
      
      
    </div>
  );
};

