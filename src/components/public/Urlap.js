import React from 'react'
import  { useContext, useState } from "react";
import { ApiContext } from '../contexts/ApiContext';


function Urlap() {
    const {postAdat}=useContext(ApiContext)
    const {kategoriak} = useContext(ApiContext)

    // saját belső state
    const [adat, setAdat]=useState({
        
            title: '',
            price: 1000,
            category: '',
            description: '',
            image: ''
            
        
    })

    function adatKuld(event){
        event.preventDefault()
        // összegyűjtük az űrlap input mezőiből az adatokat, összeállítunk egy objektumot és post kéréssel elküldjük a megfelelő végpontra
        console.log("küldés", adat)
        // validálás után - formai ellenőrzés
        postAdat("/products", adat)
    }

    function valtozasKezeles(event){
        const sv = {...adat}
        sv[event.target.id] = event.target.value
        setAdat({...sv})
    }
    
return (
    
    <div>
      <form onSubmit={adatKuld}>
    <div className="mb-3">
        <label htmlFor="title" className="form-label">Termék neve</label>
    <input type="text" pattern='^[A-ZÁÉÍÓÖŐÚÜŰ][A-Za-zÁÉÍÓÖŐÚÜŰáéíóöőúüű ]{2,}$' value={adat.title} onChange={valtozasKezeles} className="form-control" id="title"/>
  </div>

 

  <div className="mb-3">
        <label htmlFor="category" className="form-label">Termék kategóriája</label>
        <select id="category" value={adat.category} onChange={valtozasKezeles}  className="form-control">
        <option value="">Válassz kategóriát</option>
        {
            kategoriak.map((kategoria, index) => {
             return <option key={index} value={kategoria}>
              {kategoria}
            </option>
          }
          )}
        </select>
  </div>
  

  <div className="mb-3">
        <label htmlFor="description" className="form-label">Termék leírása</label>
    <textarea  type="text" onChange={valtozasKezeles} className="form-control" id="description"/>
  </div>



  <div className="mb-3">
        <label htmlFor="image" className="form-label">Termék képe</label>
    <input type="file" onChange={valtozasKezeles} className="form-control" id="image"/>
  </div>


  <div className="mb-3">
        <label htmlFor="price" className="form-label">Termék Ára</label>
    <input type="number" min='1000' max="100000" onChange={valtozasKezeles} className="form-control" id="price"/>
  </div>
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>



    </div>
  )
}

export default Urlap
