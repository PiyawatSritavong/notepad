import React from 'react'
import styles from './index.module.scss'
import { Icon } from '@fluentui/react/lib/Icon'

const CardComponant = (props: { id: string; title: string; detail: string; isActive: boolean; onClickCardID: any }) => {
  return (
    <div
      className={`${styles.card} ${props.isActive ? styles.active : null}`}
      onClick={() => props.onClickCardID(props.id)}
    >
      <h4 className={`cWhite ${styles.titleCard}`}>{props.title}</h4>
      <p className={`cWhite ${styles.detailCard}`}>{props.detail}</p>
    </div>
  )
}

export default CardComponant
