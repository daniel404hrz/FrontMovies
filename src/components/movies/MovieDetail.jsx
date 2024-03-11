import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image, Button } from "@nextui-org/react";
import styles from "./movies.module.css";
export default function MovieDetail() {
  const [movie, setMovie] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log(id);
        alert("Error al obtener datos o pelicula no existe");
      });
  }, []);

  return (
    <div className={styles.movie_box}>
      <div className={styles.movie_texts}>
        <h1>{movie.titulo}</h1>
        <p>{movie.descripcion}</p>

        <div className={styles.precios}>
          <span>Disponible: {movie.disponibilidad ? "si" : "no"}</span>
          <br />
          <span>stock: {movie.stock}</span>
          <b>
            <h3>Precios:</h3>
            <div className={styles.precio_spans}>
              <span>compra: {movie.precioVenta}$.</span>

              <span>renta: {movie.precioAlquiler}$.</span>
            </div>
          </b>
        </div>
        <div className={styles.buttons}>
          <Button color="primary" variant="shadow">
            Rentar {movie.precioAlquiler}
          </Button>
          <Button color="primary" variant="shadow">
            Comprar {movie.precioVenta}
          </Button>
        </div>
      </div>
      <Image
        width={240}
        src={movie.imagen}
        alt="NextUI Album Cover"
        classNames="m-5"
        className={styles.imagen}
      />
    </div>
  );
}
