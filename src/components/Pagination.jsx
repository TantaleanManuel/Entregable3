import React from 'react'
import { numbersPage } from '../utils/handlePagination'
import "./styles/Pagination.css"

const Pagination = ({setPage, RESIDENTS_PERPAGE,location}) => {
  return (
    <ul className='pagination_item'>
      Inicio
{
  numbersPage(location,RESIDENTS_PERPAGE).map(numberPage =>
  <li onClick={() => setPage(numberPage)} key={numberPage}>
  {numberPage} </li>)
} Fin
</ul>
  )
}

export default Pagination