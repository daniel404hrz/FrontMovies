import { Button } from "@nextui-org/react";
import { useState } from "react";
import styles from "./movies.module.css";
export default function Counter({count,setCount, stock}) {
  

  const increment = () => {
    if (stock <= count) {
        return
        
    }else{
        setCount((prevCount) => prevCount + 1);

    }
    
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className={`${styles.buttons_count_box} flex `}>
  <Button className={`${styles.buttons_count} text-2xl mr-4`} isIconOnly size="sm" onClick={() => decrement()} color="danger" aria-label="Like">
    -
  </Button>
  <span className={`${styles.buttons_count} text-2xl font-bold`}>{count}</span>
  <Button className={`${styles.buttons_count} text-2xl ml-4`} size="sm" isIconOnly onClick={() => increment()} color="danger" aria-label="Like">
    +
  </Button>
</div>
  );
}