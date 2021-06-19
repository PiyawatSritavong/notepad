import React, { useState } from 'react'
import ContentComponant from './components/contentComponant'
import NavSideBar from './components/navSideBar'
import NavTopBar from './components/navTopBar'

function App() {
  const [selectID, setSelectID] = useState('')
  return (
    <div className="App">
      <NavSideBar selectID={selectID} setSelectID={setSelectID} />
      <div className="wapperBody">
        <NavTopBar selectID={selectID} setSelectID={setSelectID} />
        <ContentComponant selectID={selectID} />
      </div>
    </div>
  )
}

export default App
