import React from 'react'
import styles from './index.module.scss'
import { Icon } from '@fluentui/react'
import axios from 'axios'
import { url } from '../commons/urlApi'
import { useFormikContext, withFormik, Form, Field } from 'formik'
import { mockup } from '../commons/mockUpData'

const NavTopBar: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<any>()

  const removeCard = () => {
    setFieldValue('selectID', '', false)
    setFieldValue('clickAction', true, false)

    // axios
    //   .delete(`${url}/notepad/${values.selectID}`)
    //   .then((res) => {
    //     console.log('removeCard', res)
    //     setFieldValue('selectID', '', false)
    //     setFieldValue('clickAction', true, false)
    //   })
    //   .catch((err) => {
    //     console.log(err.response)
    //   })
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
            <Icon
              iconName="Save"
              className={`${styles.iconStyles}`}
              onClick={() => setFieldValue('clickAction', true, false)}
            />
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
