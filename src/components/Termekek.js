import React, { useContext, useState, useEffect } from 'react'
import Termek from './Termek'
import { ApiContext } from '../contexts/ApiContext'

function Termekek() {
  const {termekLista, kategoriak} = useContext(ApiContext)
  const [kivalasztottKategoria, setKivalasztottKategoria] = useState('')
  const [szurtTermekek, setSzurtTermekek] = useState(termekLista)

  const kategoriaValtozas = (e) => {
    setKivalasztottKategoria(e.target.value);
  };


  const szures = () => {
    if (kivalasztottKategoria === '') {
      setSzurtTermekek(termekLista) 
    } else {
      const szurt = termekLista.filter((termek) => termek.category === kivalasztottKategoria)
      setSzurtTermekek(szurt) 
    }
  };

  
  useEffect(() => {
    if (kategoriak.length > 0 && kivalasztottKategoria === '') {
      setKivalasztottKategoria(kategoriak[0])
    }
  }, [kategoriak])

  useEffect(() => {
    setSzurtTermekek(termekLista)
  }, [termekLista])

  return (
    <>
      <div className="mb-4">
        <label htmlFor="kategoria">Szűrés:</label>
        <select id="kategoria" onChange={kategoriaValtozas} value={kivalasztottKategoria} className="form-control">
          <option value="">Minden kategória</option>
          {kategoriak.map((kategoria, index) => (
            <option key={index} value={kategoria}>
              {kategoria}
            </option>
          ))}
        </select>
      </div>

      <button onClick={szures} className="btn btn-primary mb-4">Szűrés</button>

      <div className='termekek row'>
        {szurtTermekek.map((adat, index) => {
          return (<Termek adat={adat} key={index} />)
        })}
      </div>
    </>
  )
}

export default Termekek
