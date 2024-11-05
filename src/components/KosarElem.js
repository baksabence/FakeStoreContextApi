import React from 'react'

function KosarElem(props) {
    return (
      <tr>
          <td>{props.adat.title}</td>
          <td>{props.adat.price}</td>
      </tr>
    )
  }

export default KosarElem
