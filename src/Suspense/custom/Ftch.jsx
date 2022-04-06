import React from 'react'

export default function Ftch({resource}) {
  const data = resource.ftch.read()
  return (
    <div><h3>Ftch</h3>
    <div>Ftch:{JSON.stringify(data.data)}</div>
    </div>
  )
}
