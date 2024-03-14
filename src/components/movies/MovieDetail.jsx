import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Image, Button } from "@nextui-org/react";
import styles from "./movies.module.css";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import { setMov } from "../../redux/moviesSlice";

export default function MovieDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [items, setItems] = useState(1);
  const { movie } = useSelector((state) => state.movies);
  const { id } = useParams();
  const userID = useSelector((state) => state.user.userLocal.id);

  const getMovie = async () => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((response) => {
        const movie = response.data;
        dispatch(setMov(movie));
      })
      .catch((error) => {
        console.log(error.message);
        alert("Error al obtener datos o pelicula no existe");
      });
  };
  const rentMovie = async () => {
    if (userID) {
      await axios
        .post("http://localhost:3000/renta", { movieID: id, userID })
        .then((res) => {
          if (res.data.already) {
            alert(res.data.message);
            
          } else {
            navigate("/");
          dispatch(setMov({}));
            
          }
          
          
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      alert("Se debe registrar para comprar peliculas");
    }
  };
  const buyMovie = async () => {
    if (userID) {
      await axios
        .post("http://localhost:3000/purchases", { movieID: id, userID, items })
        .then((res) => {
          navigate("/");
          dispatch(setMov({}));
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      alert("Se debe registrar para comprar peliculas");
    }
  };

  useEffect(() => {
    getMovie();
    return () => {
      dispatch(setMov({})); // Reinicia el estado de la película
    };
  }, []);

  return (
    <div className={styles.movie_box}>
      {movie.titulo && (
        <>
          <div className={styles.movie_texts}>
            <h1>{movie.titulo}</h1>
            <p>{movie.descripcion}</p>
            <div className={styles.precios}>
              <span>
                {" "}
                <b>Disponible:</b> {movie.disponibilidad ? "si" : "no"}
              </span>
              <br />
              <span>
                <b>Stock:</b> {movie.stock}
              </span>
              <div className={styles.precio_spans}>
                <h3>
                  <b>Precios:</b>
                </h3>
                <span>Compra: {movie.precioVenta}$.</span>
                <span>Renta: {movie.precioAlquiler}$.</span>
              </div>
              <div>
                <b>Cantidad:</b>{" "}
                <Counter
                  count={items}
                  setCount={setItems}
                  stock={movie.stock}
                ></Counter>
              </div>
            </div>

            <div className={styles.buttons}>
              <Button
                onClick={() => {
                  rentMovie();
                }}
                color="primary"
                variant="shadow"
              >
                Rentar {movie.precioAlquiler}
              </Button>
              <Button
                onClick={() => buyMovie()}
                color="primary"
                variant="shadow"
              >
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
        </>
      )}
    </div>
  );
}
