import styles from './Logo.module.css'
import avatar from '../../Assets/CryptoLogo.png'


const Logo = () => {

    return <div className={styles['logo-content']}>
        <img src={avatar} className={styles.avatar}></img>
        <h2>{'<' + "CryptoAnalythics" + '>'}</h2>
    </div>
}

export default Logo