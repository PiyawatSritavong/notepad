import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import axios from 'axios'
import { url } from '../commons/urlApi'
import { useFormikContext, withFormik, Form, Field } from 'formik'

const ContentComponant: React.FC = () => {
  const { values, errors, touched, setFieldValue } = useFormikContext<any>()

  const [id, setId] = useState('')
  const [title, setTitle] = useState(``)
  const [detail, setDetail] = useState(``)

  useEffect(() => {
    if (!values.selectID) {
      setTitle('')
      setDetail('')
      return
    }
    setId(values.selectID)

    if (values.selectID === 'add') {
      setTitle('')
      setDetail('')
      return
    }

    axios
      .get(`${url}/notepad/${values.selectID}`)
      .then((res) => {
        // console.log(res)
        setTitle(res.data.title)
        setDetail(res.data.note)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }, [values.selectID])

  // If Click save call api edit or create
  useEffect(() => {
    if (!values.clickAction && !values.selectID) return

    const data = {
      title: title,
      note: detail,
    }
    console.log('values.selectID', values.selectID)
    if (values.selectID === 'add') {
      axios
        .post(`${url}/notepad`, data)
        .then((res) => {
          console.log('post ContentComponant', res.data)
          setFieldValue('clickAction', false, false)
          setFieldValue('selectID', res.data, false)
        })
        .catch((err) => {
          console.log(err.response)
        })
    } else {
      axios
        .put(`${url}/notepad/${values.selectID}`, data)
        .then((res) => {
          setFieldValue('clickAction', false, false)
          console.log('ContentComponant', res)
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  }, [values.clickAction])

  if (!id) {
    return null
  }
  return (
    <div className={styles.groupInput}>
      <input
        type="text"
        className={`${styles.inputTitle} cWhite`}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="หัวข้อ"
      />
      <textarea
        className={`${styles.inputTextArea} cWhite`}
        onChange={(e) => setDetail(e.target.value)}
        value={detail}
        placeholder="เนื้อหา"
      ></textarea>
    </div>
  )
}

export default ContentComponant
