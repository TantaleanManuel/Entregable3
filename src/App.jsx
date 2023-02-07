import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Locationinfo from './components/Locationinfo';
import Pagination from './components/Pagination';
import ResidentForm from './components/ResidentForm';
import ResidentList from './ResidentList';
import {getRandomNumber } from './utils/handleRandom';

const RESIDENTS_PERPAGE = 12;

function App() {
  // Estado que almacena la informacion de location
  const [location, setLocation] = useState()
  // Estado que almacena el valor del input no controlado
  const [nameLocation, setNameLocation] = useState("")
  const [page, setPage] = useState(1)

  // Funcion que se ejecuta en el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  }

  // Funcion que se encarga de obtener los residentes
  // de la pagina actual
  const pagination = () => {
   const maxLimit = page * RESIDENTS_PERPAGE;
   const minLimit = maxLimit - RESIDENTS_PERPAGE;
   const newResidents = location?.residents.slice(minLimit, maxLimit)
   return newResidents

  }

  // Efecto  que se ejecuta en el primer render y cambia nameLocation
  useEffect(() => {
    setPage(1)
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation 
    const URL= `https://rickandmortyapi.com/api/location/${dimension}`;
    axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  }, [nameLocation])

  return (
  <div className="App">
    <div className='app_img1'>
      <img src="HeaderImage.jpg" alt="" />
    </div>

<ResidentForm handleSubmit={handleSubmit}  />
<Locationinfo location={location}/>
<Pagination location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} setPage={setPage} />
<ResidentList pagination={pagination}/>
<Pagination location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} setPage={setPage} />
  </div>
  )
}

export default App
