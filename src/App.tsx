import React from 'react'
import { useFormikContext, withFormik, Form, Field } from 'formik'
import ContentComponant from './components/contentComponant'
import NavSideBar from './components/navSideBar'
import NavTopBar from './components/navTopBar'

function App() {
  const { values, errors, touched } = useFormikContext<any>()

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

    title: '',
    detail: '',
  }),
  validate: (values) => {
    const errors: any = {}

    if (!values.title) {
      errors.selectID = 'Required'
    }
    if (!values.detail) {
      errors.clickAction = 'Required'
    }

    return errors
  },
  handleSubmit: (values) => {
    alert(`Action Submit ${JSON.stringify(values)}`)
    // Action Create or Update
  },
})(App)

export default EnhancedApp
