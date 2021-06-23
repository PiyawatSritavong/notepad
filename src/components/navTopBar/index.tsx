import React from 'react'
import styles from './index.module.scss'
import { Icon } from '@fluentui/react'
import axios from 'axios'
import { url } from '../commons/urlApi'
import { useFormikContext, withFormik, Form, Field } from 'formik'

const NavTopBar: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<any>()

  const removeCard = () => {
    setFieldValue('selectID', '', false)
  }

  return (
    <nav className={styles.navTopBar}>
      <div className={styles.groupIcons}>
        <Icon
          iconName="PageEdit"
          className={`${styles.iconStyles}`}
          onClick={() => setFieldValue('selectID', 'add', false)}
        />

        {values.selectID && (
          <>
            <Icon iconName="Save" className={`${styles.iconStyles}`} />
          </>
        )}

        {values.selectID && values.selectID !== 'add' && (
          <>
            <Icon iconName="Archive" className={`${styles.iconStyles}`} onClick={() => removeCard()} />
          </>
        )}
      </div>
    </nav>
  )
}

export default NavTopBar
