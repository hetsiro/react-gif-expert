import React from 'react'
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {


 // --------------------------------------------------------------------------

    const [categories, setCategories] = useState(['Fortnite']);

    const onAddCategory = ( onNewCategory ) => {
        if(categories.includes(onNewCategory)) return;
        setCategories([onNewCategory]);
    }

 // --------------------------------------------------------------------------


  return (
    <>
        <h1>GifExpertApp 2.0</h1>

        <AddCategory onAddCategory={ onAddCategory }/>

            { categories.map( category => 
            (
                <GifGrid key={ category } category={category } />
            ))
            }
    </>
  )
}
