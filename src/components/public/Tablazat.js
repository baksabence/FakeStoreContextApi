
import React, { useContext } from 'react'
import { ApiContext } from '../../contexts/ApiContext'
import TablazatSor from './TablazatSor'


function Tablazat() {

    const {termekLista} = useContext(ApiContext)

  return (
    <table className="table">  
    <thead className="thead-dark">
        <th>Név</th>
        <th>Kategória</th>
        <th>Ár</th>
        <th>Módosít</th>
    </thead>
    <tbody>
    {termekLista.map((adat, index) => {
          return (<TablazatSor adat={adat} key={index}  />)
        })}
    </tbody>    
        

    </table>
  )
}

export default Tablazat
