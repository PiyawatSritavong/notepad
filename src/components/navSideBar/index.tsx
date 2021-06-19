import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Icon } from '@fluentui/react/lib/Icon'
import CardComponant from './cardComponant'
import { mockup } from '../commons/mockUpData'
import axios from 'axios'
import { url } from '../commons/urlApi'

const NavSideBar: React.FC<{ selectID: string; setSelectID: any }> = (props: {
  selectID: string
  setSelectID: any
}) => {
  useEffect(() => {
    axios
      .get(`${url}/notepad`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }, [])

  const onClickCardID = (id: string) => {
    props.setSelectID(id)
  }

  return (
    <nav className={styles.navSideBar}>
      <div className={styles.groupIcons}>
        <Icon iconName="BulletedList" className={`${styles.iconStyles} ${styles.active}`} />
        {/* <Icon iconName="GridViewMedium" className={styles.iconStyles} /> */}
        {/* <Icon iconName="Archive" className={`${styles.iconStyles} ${styles.right}`} /> */}
      </div>
      <div className={styles.groupCards}>
        <h5 className={`cGray ${styles.title}`}>Notes</h5>
        {mockup.map((data, index) => {
          return (
            <CardComponant
              key={index}
              id={data.id}
              title={data.title}
              detail={data.detail}
              isActive={props.selectID === data.id ? true : false}
              onClickCardID={onClickCardID}
            />
          )
        })}
      </div>
    </nav>
  )
}

export default NavSideBar
