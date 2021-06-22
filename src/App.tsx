import React, { useState } from 'react'
import ContentComponant from './components/contentComponant'
import NavSideBar from './components/navSideBar'
import NavTopBar from './components/navTopBar'
import { withFormik } from 'formik'

function App() {
  return (
    <div className="App">
      <NavSideBar />
      <div className="wapperBody">
        <NavTopBar />
        <ContentComponant />
      </div>
    </div>
  )
}

const EnhancedApp = withFormik({
  mapPropsToValues: () => ({
    selectID: '',
    clickAction: false,
  }),
  validate: (values) => {
    const errors: any = {}

    if (!values.selectID) {
      errors.selectID = 'Required'
    }
    if (!values.clickAction) {
      errors.clickAction = 'Required'
    }

    return errors
  },
  handleSubmit: (values) => {
    alert(`Action Submit ${JSON.stringify(values)}`)
  },
})(App)

export default EnhancedApp
