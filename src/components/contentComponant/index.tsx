import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { mockup } from '../commons/mockUpData'

const ContentComponant = (props: { selectID: string }) => {
  const [id, setId] = useState('')
  const [title, setTitle] = useState(``)
  const [detail, setDetail] = useState(``)

  useEffect(() => {
    if (!props.selectID) {
      setTitle('')
      setDetail('')
      return
    }
    setId(props.selectID)

    if (props.selectID === 'add') {
      setTitle('')
      setDetail('')
      return
    }

    const find = mockup.find((ele) => ele.id === props.selectID)
    if (!find) return

    setTitle(find.title)
    setDetail(find.detail)
  }, [props.selectID])

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
