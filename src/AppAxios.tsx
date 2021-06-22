import React, { useState, useEffect } from 'react'
import axios from 'axios'

function AppAxios() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios
      .post('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((res) => {
        console.log('res', res)
        const list = res.data.results
        setList(list)
      })
      .catch((err) => console.log('err', err.response))
  }, [])

  return (
    <div>
      {list.map((data: { name: string }, index) => (
        <div key={index}>
          <h1>{data.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default AppAxios
