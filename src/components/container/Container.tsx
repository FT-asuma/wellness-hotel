import React from 'react'
import styles from './container.module.css'
const Container = ({children}: {
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Container