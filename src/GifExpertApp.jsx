import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);
    const onAddCategory = (newCategory)=>{
        if( categories.includes(newCategory) ) return;
        // console.log(newCategory);
        setCategories( [newCategory, ...categories] );
        // setCategories( cat=>[...cat, 'Valorant'] );
    };
    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* input */} 
            <AddCategory 
                // setCategories={ setCategories }
                //on es un evento
                onNewCategory={value=>onAddCategory(value)}
            />
            {/* Listado de Gif */}
            {/* <button onClick={ onAddCategory }>Agregar</button> */}
            {
                categories.map( category =>(
                        <GifGrid 
                            key={ category }
                            category = { category }/>
                    ))
            }
                {/* Gif Item */}
        </>
    )
}
