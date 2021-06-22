import React from 'react'
import styles from './index.module.scss'
import { Icon } from '@fluentui/react/lib/Icon'

const CardComponant = (props: {
  id: string
  title: string
  detail: string
  updatedAt: string
  isActive: boolean
  onClickCardID: (id: string) => void
}): JSX.Element => {
  return (
    <div
      className={`${styles.card} ${props.isActive ? styles.active : null}`}
      onClick={() => props.onClickCardID(props.id)}
    >
      <h4 className={`cWhite ${styles.titleCard}`}>{props.title}</h4>
      <p className={`cWhite ${styles.detailCard}`}>
        {props.updatedAt.replace('T', ' ').split('.')[0]} <span className={`cGray`}>{props.detail}</span>
      </p>
    </div>
  )
}

function kok(): number {
  return 1
}

export default CardComponant
