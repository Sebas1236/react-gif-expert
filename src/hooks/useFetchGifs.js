import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//Custom Hook
export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
    const getImages = async()=>{
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
    //useEffect sirve para disparar efectos secundarios
    //Efecto secundario. Proceso  que se quiere ejecutar cuando algo suceda
    useEffect(()=>{
        getImages();
        //el retorno está destinado a hacer una limpieza
    }, []);//si está vacío solo se construye 1 vez 
    return {
        images,
        isLoading
    }
}
