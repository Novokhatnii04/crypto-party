import styles from './Greeting.module.css'
import Logo from '../../Assets/CryptoLogo.png'
import React from 'react'

const Greeting = () => {
    return <React.Fragment>
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles['animated-text']}>
                    <h1>{'<' + 'Crypto' + '>'}</h1>
                    <h1>Analythics</h1>
                </div>
                <img src={Logo} className={styles.avatar}></img>
            </div>
        </div>


    </React.Fragment>
}

export default Greeting