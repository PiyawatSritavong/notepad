import React from 'react'
import styles from './index.module.scss'
import { Icon } from '@fluentui/react/lib/Icon'
import CardComponant from './cardComponant'
import { mockup } from '../commons/mockUpData'

const NavSideBar = (props: { selectID: string; setSelectID: any }) => {
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
