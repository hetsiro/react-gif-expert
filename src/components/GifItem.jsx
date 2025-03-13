import React from 'react'

console.log("entro");

export const GifItem = ({ title, url }) => {
    return (
      <div className="card">
          <img src={url} />
          <p>{title}</p>
      </div>
  )
}
