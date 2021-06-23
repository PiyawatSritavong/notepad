import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import axios from 'axios'
import { url } from '../commons/urlApi'
import { useFormikContext, withFormik, Form, Field } from 'formik'
import { mockup } from '../commons/mockUpData'

const ContentComponant: React.FC = () => {
  const { values, errors, touched, setFieldValue } = useFormikContext<any>()

  useEffect(() => {
    if (!values.selectID) {
      setFieldValue('title', '', false)
      setFieldValue('detail', '', false)
      return
    }

    if (values.selectID === 'add') {
      setFieldValue('title', '', false)
      setFieldValue('detail', '', false)
      return
    }

    const find = mockup.find((ele) => ele.id === values.selectID)
    if (find) {
      setFieldValue('title', find.title, false)
      setFieldValue('detail', find.note, false)
    }
  }, [values.selectID])
  console.log('values', values)
  if (!values.selectID) {
    return null
  }
  return (
    <div className={styles.groupInput}>
      <Field type="text" name="title" placeholder="title" className={`${styles.inputTitle} cWhite`} />
      <Field as="textarea" name="detail" placeholder="detail" className={`${styles.inputTextArea} cWhite`} />
    </div>
  )
}

export default ContentComponant
