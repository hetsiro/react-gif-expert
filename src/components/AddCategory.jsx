import React from 'react'
import { useState } from 'react'

export const AddCategory = ( { onAddCategory } ) => {

    const [buscador, setBuscador] = useState('');

    const onChange = (e) => { 
        setBuscador(e.target.value);
     }

     const onSubmit = (e) => {
        e.preventDefault();
        onAddCategory(buscador);
     }

  return (
    <form onSubmit={ onSubmit }>
        <input type="text" placeholder='Buscar Gifs' onChange={ onChange }/>
    </form> 
  )
}
