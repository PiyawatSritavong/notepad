import React, { useState } from 'react'
import BodyCardComponant from './BodyCardComponant'

const intitilValue = {
  title: '1UP BOOTCAMP',
  note: 'see you',
}
export const TextContext = React.createContext(intitilValue)

function AppTestContext() {
  return (
    <TextContext.Provider value={intitilValue}>
      <CardComponant />
    </TextContext.Provider>
  )
}

export default AppTestContext

const CardComponant = () => {
  return <BodyCardComponant />
}
