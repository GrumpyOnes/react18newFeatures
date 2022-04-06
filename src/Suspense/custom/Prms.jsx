import React from 'react'

export default function Prms({resource}) {
  const data = resource.prms.read()
  return (
    <div><h3>Prms</h3>
    <div>Prms:{JSON.stringify(data)}</div>
    </div>
  )
}
