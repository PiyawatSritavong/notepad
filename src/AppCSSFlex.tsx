import React from 'react'
import styles from './index.module.scss'

function AppCSSFlex() {
  return (
    <div className={styles.wapper}>
      <div className={styles.row}>
        <div className={styles.box}>A</div>
      </div>
      <div className={`${styles.row} ${styles.mobileColumn}`}>
        <div className={`${styles.box} ${styles.box70}`}>B</div>
        <div className={`${styles.box} ${styles.box30}`}>E</div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.box30}`}>C</div>
        <div className={`${styles.box} ${styles.box70}`}>D</div>
      </div>
    </div>

    // <div className={styles.wapperThisLayout}>
    //   <nav className={`${styles.borderContext}`}>A</nav>
    //   <section className={styles.bodyWapper}>
    //     <div className={`${styles.borderContext} ${styles.leftBox}`}>B</div>
    //     <div className={`${styles.borderContext} ${styles.rightBox}`}>C</div>
    //   </section>
    //   <footer className={styles.footerWapper}>
    //     <div className={`${styles.borderContext} ${styles.leftBox}`}>D</div>
    //     <div className={`${styles.borderContext} ${styles.rightBox}`}>E</div>
    //   </footer>
    // </div>
  )
}

export default AppCSSFlex
