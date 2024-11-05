import React, { useContext } from 'react'
import { KosarContext } from '../contexts/KosarContext'

function Termek(props) {

    const {kosarbaTesz}=useContext(KosarContext)

  return (
   
       <div className="card col-md-4 mb-4"> 
       <h4 className="card-title">{props.adat.title}</h4>
            <div className="card-body">
                <img className="kep card-img-top" src={props.adat.image} />
                <h4 className="card-text">{props.adat.description}</h4>
                <p className="card-text">{props.adat.price}</p>
                <button className="gomb btn btn-primary mt-4" onClick={() => kosarbaTesz(props.adat)}>Kosárba</button>
            </div>
       </div>
   
  )
}

export default Termek
