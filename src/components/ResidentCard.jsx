import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./styles/ResidentCard.css"


const ResidentCard = ({residenturl} ) => {
  const [residentInfo, setResidentInfo] = useState()

console.log(residenturl)
useEffect(() => {
    axios.get(residenturl)
  .then((res) => setResidentInfo(res.data))
  .catch((err) => console.log(err))
}, [])

  return (
    <article className='residenCard'>
      <div className='residenCard__img'>
        <img src={residentInfo?.image} alt="" />
      </div>
      <div className='residenCard__status'>
        <div className='residenCard__status-circle ${residentInfo?.status} ' ></div>
        <h4 className='residenCard__status-name'>{residentInfo?.status}</h4>
      </div>
      
      <section className='residenCard__info'>
        <h3 className='residenCard__name'>{residentInfo?.name}</h3>
        <hr className='residenCard__line'/>
        <ul className='residenCard__list'>
          <li className='residenCard__item'><span>Specie:</span>{residentInfo?.species}</li>
          <li className='residenCard__item'><span>Origin:</span>{residentInfo?.origin.name}</li>
          <li className='residenCard__item'><span>Episodes where appears:</span>{residentInfo?.episode.length}</li>
        </ul>
      </section>
      
    </article>
  )
}

export default ResidentCard