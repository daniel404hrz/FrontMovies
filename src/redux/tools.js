import axios from "axios";

export const getMovies = async () => {
  const response = await axios.get("http://localhost:3000/movies");
  
  const entries = Object.entries(response.data);

  // Ordenar el array por el campo 'titulo'
  return entries.sort((a, b) =>{
    
    return a[1].titulo.localeCompare(b[1].titulo)
  } );
};

const sortedMovies = async (movies, sortBy) => {
  [...movies].sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "likes") {
      return b.likes - a.likes;
    }
    return 0;
  });
};
