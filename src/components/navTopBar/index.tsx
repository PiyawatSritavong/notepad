import React from 'react'
import styles from './index.module.scss'
import { Icon, SearchBox, ISearchBoxStyles } from '@fluentui/react'
// import { Redirect } from 'react-router'

const SearchBoxStyles: Partial<ISearchBoxStyles> = {
  root: { margin: '0', backgroundColor: '#242625', height: '30px' },
  icon: { color: '#929493' },
}

const NavTopBar = (props: { selectID: string; setSelectID: any }) => {
  const removeCard = () => {
    console.log('selectID', props.selectID)
    props.setSelectID('')
  }
  return (
    <nav className={styles.navTopBar}>
      <div className={styles.groupIcons}>
        <Icon iconName="PageEdit" className={`${styles.iconStyles}`} onClick={() => props.setSelectID('add')} />
        {/* <Icon iconName="Photo2Add" className={styles.iconStyles} />
        <Icon iconName="FontColorA" className={`${styles.iconStyles}`} />

        <SearchBox
          placeholder="Search"
          styles={SearchBoxStyles}
          onSearch={(newValue) => console.log('value is ' + newValue)}
          className={styles.right}
        /> */}
        {props.selectID && props.selectID !== 'add' && (
          <Icon iconName="Archive" className={`${styles.iconStyles}`} onClick={() => removeCard()} />
        )}
      </div>
    </nav>
  )
}

export default NavTopBar
