import React from 'react'
import { useFormikContext, withFormik, Form, Field } from 'formik'

const AppFormik: React.FC = (props: any) => {
  const { values, errors, touched, setFieldValue } = useFormikContext<any>()

  return (
    <Form>
      <div>
        <Field name="title" placeholder="title" />
        {errors.title && touched.title && <div id="feedback">{errors.title}</div>}
      </div>

      <div>
        <Field name="note" placeholder="note" />
        {errors.note && touched.note && <div id="feedback">{errors.note}</div>}
      </div>

      <button type="submit">ส่ง</button>
    </Form>
  )
}

const EnhancedAppFormik = withFormik({
  mapPropsToValues: () => ({
    title: '',
    note: '',
  }),
  validate: (values) => {
    const errors: any = {}

    if (!values.title) {
      errors.title = 'Required'
    }
    if (values.title.search('@') !== -1) {
      errors.title = 'ห้ามใส้ @'
    }
    if (!values.note) {
      errors.note = 'Required'
    }

    return errors
  },
  handleSubmit: (values) => {
    alert(`Action Submit ${JSON.stringify(values)}`)
  },
})(AppFormik)

export default EnhancedAppFormik
