import React from 'react'
import ResidentCard from './components/ResidentCard'
import './components/styles/ResidentList.css'

const ResidentList = ({pagination}) => {
  return (
    <section className='residentList'>
    {
    pagination()?.map(residenturl => <ResidentCard key={residenturl} residenturl={residenturl} /> )
    } 
    </section>
  )
}

export default ResidentList