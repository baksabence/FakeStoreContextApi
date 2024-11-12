import React, { useContext } from 'react'
import { ApiContext } from '../../contexts/ApiContext'


function TablazatSor(props) {

    const {deleteAdat} = useContext(ApiContext)

    return (
        <tr>
            <td>{props.adat.title}</td>
            <td>{props.adat.category}</td>
            <td>{props.adat.price}</td>
            <td onClick={()=> deleteAdat("/products", props.adat.id)}>🗑️</td>
            <td>✏️</td>
        </tr>
    )
  }

export default TablazatSor

// <th>{props.adat.title}</th>