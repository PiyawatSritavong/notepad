import React, { useState, useContext } from 'react'
import { TextContext } from './AppTestContext'

const BodyCardComponant = () => {
  const text = useContext(TextContext)
  return (
    <div>
      {text.title} - {text.note}
    </div>
  )
}

export default BodyCardComponant
