import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Icon } from '@fluentui/react/lib/Icon'
import CardComponant from './cardComponant'
import axios from 'axios'
import { url } from '../commons/urlApi'
import { useFormikContext } from 'formik'
import { mockup } from '../commons/mockUpData'

interface IListCards {
  id: string
  title: string
  note: string
  createdAt: string
  updatedAt: string
}

const NavSideBar: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<any>()

  const [listCards, setListCards] = useState<IListCards[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(true)

  useEffect(() => {
    setListCards(mockup)
    setFieldValue('clickAction', false, false)

    // axios
    //   .get(`${url}/notepad`)
    //   .then((res) => {
    //     // console.log('NavSideBar', res)
    //     setListCards(res.data)
    //     setFieldValue('clickAction', false, false)
    //   })
    //   .catch((err) => {
    //     console.log(err.response)
    //   })
  }, [values.clickAction])

  const onClickCardID = (id: string) => {
    setFieldValue('selectID', id, false)
  }

  return (
    <nav className={`${styles.navSideBar} ${isOpen ? null : styles.navSideBarShort}`}>
      <div className={styles.groupIcons}>
        <Icon iconName="BulletedList" className={`${styles.iconStyles}`} onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div className={styles.groupCards} style={isOpen ? {} : { display: 'none' }}>
        <h5 className={`cGray ${styles.title}`}>Notes</h5>
        {listCards.map((data, index) => {
          return (
            <CardComponant
              key={index}
              id={data.id}
              title={data.title}
              detail={data.note}
              updatedAt={data.updatedAt}
              isActive={values.selectID === data.id ? true : false}
              onClickCardID={onClickCardID}
            />
          )
        })}
      </div>
    </nav>
  )
}

export default NavSideBar
