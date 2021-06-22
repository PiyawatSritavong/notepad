import React, { useState, useEffect } from 'react'

// function AppTest() {
//   const [counter, setCounter] = useState(0)
//   const [isReset, setIsReset] = useState(false)

//   // Case useEfect ผันกัน
//   useEffect(() => {
//     setCounter(100)
//   }, [isReset])

//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button type="button" onClick={() => setCounter(counter + 1)}>
//         เพิ่ม 1
//       </button>
//       <button type="button" onClick={() => setIsReset(!isReset)}>
//         Reset 100
//       </button>
//     </div>
//   )
// }

function AppTest() {
  const [id, setId] = useState('')
  const [fullname, setFullname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [movieId, setMovieId] = useState('')

  useEffect(() => {
    const findIDResult = mockUpUser.find((ele) => ele.id === id)
    const findFullanmeResult = mockUpUser.find((ele) => ele.fullname === fullname)

    if (findIDResult) {
      setFullname(findIDResult.fullname)
      setPhone(findIDResult.phone)
      setEmail(findIDResult.email)
      setMovieId(findIDResult.moviewId)
    } else if (findFullanmeResult) {
      setFullname(findFullanmeResult.fullname)
      setPhone(findFullanmeResult.phone)
      setEmail(findFullanmeResult.email)
      setMovieId(findFullanmeResult.moviewId)
    } else {
      // setFullname('')
      setPhone('')
      setEmail('')
      setMovieId('')
    }
  }, [id, fullname])

  return (
    <div>
      <input type="text" placeholder="id" value={id} onChange={(e) => setId(e.target.value)} />
      <input type="text" placeholder="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} />
      <h1>ข้อมูลส่วนตัว</h1>
      <h1>fullname: {fullname}</h1>
      <h1>phone: {phone}</h1>
      <h1>email: {email}</h1>
      <h1>movie: {mockupMovie?.find((ele) => ele.id === movieId)?.name}</h1>
    </div>
  )
}

export default AppTest

const mockUpUser = [
  {
    id: '1',
    fullname: 'supagorn',
    phone: '098765432',
    email: 'supagorn00001@gmail.com',
    moviewId: '1',
  },
  {
    id: '2',
    fullname: 'sorawit sirimaleewatta',
    phone: '098765432',
    email: 'sorawit00001@gmail.com',
    moviewId: '1',
  },
  {
    id: '11',
    fullname: 'sorawit sirimaleewatta',
    phone: '098765432',
    email: 'sorawit00001@gmail.com',
    moviewId: '1',
  },
]

const mockupMovie = [
  {
    id: '1',
    name: 'forrest gump',
  },
]
