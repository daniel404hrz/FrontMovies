import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Checkbox,
} from "@nextui-org/react";
import styles from "./movies.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function Movies({ movies, handleLikeMovie }) {
  const user = useSelector((state) => state.user);
 
    const likeFun = (id, userLikes) => {
      if (user.userLocal.login) {
        
      handleLikeMovie(id, userLikes.includes(user.userLocal.id) ? "false" : "true", user.userLocal.id);
    }else {
      return
    
  } 
    
  }
  

  return (
    <div className={styles.cards_box}>
    {movies ? (
      Object.entries(movies).map((movie) => (
        <div key={movie[1][0]} className={styles.card_box}>
          
            <Card 
              isFooterBlurred
              className="  transition-transform duration-200 ease-in-out hover:scale-105"
            >
              <button
                className={`${styles.likes}`}
                onClick={() => likeFun(movie[1][0], movie[1][1].userLikes)}
              >
                { movie[1][1].userLikes.includes(user.userLocal.id)
                  ? "💙 " + movie[1][1].likes
                  : "🖤 " + movie[1][1].likes}
              </button>
              <CardHeader className="absolute z-10 top-1 flex-col items-start"></CardHeader>
              <Link className="z-0 " to={`/movie/${movie[1][0]}`}>
              <Image
                
                alt="Card example background"
                className="z-0  scale-125 -translate-y-3 object-cover"
                src={movie[1][1].imagen}
              />
              </Link>
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between p-2">
                <div>
                  <h5 className="text-black text-sm">{movie[1][1].titulo}</h5>
                </div>
                <Link className={styles.buyButton} to={`/movie/${movie[1][0]}`}>
                <Button
                  className="text-tiny"
                  color="primary"
                  radius="medium"
                  size="sm"
                >
                  Comprar
                </Button>
                </Link>
              </CardFooter>
            </Card>
          
        </div>
      ))
    ) : (
      <h2>loading....</h2>
    )}
  </div>
  );
}