import React from 'react'
import styles from './index.module.scss'
import { Icon } from '@fluentui/react'

const NavTopBar: React.FC<{ selectID: string; setSelectID: any }> = (props: { selectID: string; setSelectID: any }) => {
  const removeCard = () => {
    props.setSelectID('')
  }
  return (
    <nav className={styles.navTopBar}>
      <div className={styles.groupIcons}>
        <Icon iconName="PageEdit" className={`${styles.iconStyles}`} onClick={() => props.setSelectID('add')} />

        {props.selectID && props.selectID !== 'add' && (
          <Icon iconName="Archive" className={`${styles.iconStyles}`} onClick={() => removeCard()} />
        )}
      </div>
    </nav>
  )
}

export default NavTopBar
