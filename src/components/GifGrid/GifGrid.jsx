import React /* , { useState, useEffect } */ from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
/* import { getGifs } from "../../helpers/getGifs"; */
import GifGridItem from "../GifGridItem/GifGridItem";

export const GifGrid = ({ category }) => {
  /* const [images, setimages] = useState([]);
  
    //Si la categoría cambia, se volverá a disparar la petición http
    useEffect(() => {
      getGifs(category)
          .then(setimages)
    }, [category]); */

  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeInUp">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading</p>}
      {
        <div className="card-grid">
          {data.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      }
    </>
  );
};

export default GifGrid;
