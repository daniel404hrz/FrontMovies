import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import styles from "./movies.module.css"
export default function Movies ({movies}) {
    
    return(
        <div className={styles.cards_box}>
      {movies ? Object.entries(movies).map((movie) => (
         <div key={movie[0]} className={styles.card_box}>
            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5 transition-transform duration-200 ease-in-out hover:scale-105">
                <p className={styles.likes}>❤ {movie[1].likes}</p>
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        
       
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={movie[1].imagen}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between p-2">
  <div>
    <h5 className="text-black text-sm">{movie[1].titulo}</h5>
  </div>
  <Button className="text-tiny" color="primary" radius="medium" size="sm">
    Comprar
  </Button>
</CardFooter>
    </Card>
         </div> 
        )): <h2>loading....</h2>}
      </div>
    )
}