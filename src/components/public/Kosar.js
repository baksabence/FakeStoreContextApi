import { KosarContext } from '../../contexts/KosarContext'
import React, { useContext } from 'react'
import KosarElem from './KosarElem'

function Kosar() {
  
    const {kosarLISTA} = useContext(KosarContext)

    return (
    <div className='termekek row'>
        {kosarLISTA.map((adat, index)=>{
            return (<KosarElem adat = {adat} key = {index} />)
        })}
    </div>
  )
}

export default Kosar
