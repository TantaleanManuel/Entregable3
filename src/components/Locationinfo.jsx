import React from 'react'
import "./styles/Locationinfo.css"


const Locationinfo = ({location}) => {
  return (
    <section className='locatiton_title'>
  <h2>{location?.name}</h2>
  <ul className='location_items'>
    <li>Type:<span></span>{location?.type}</li>
    <li>Dimension:<span>{location?.dimension}</span></li>
    <li>Population:<span>{location?.residents.length}</span></li>
  </ul>
</section>
  )
}

export default Locationinfo