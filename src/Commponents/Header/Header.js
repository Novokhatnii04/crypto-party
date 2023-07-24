import React from "react"
import styles from './Header.module.css'
import Logo from '../UI/Logo'
import StatusHeader from "./Status-header"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

const Header = () => {
    return <React.Fragment>
        <StatusHeader />
        <section className={styles.section}>
            <Logo />
            <ul className={styles.lists}>
                <li><NavLink className={styles.unactive} activeClassName={styles.active} to={'/home'}>Головна 🌏</NavLink></li>
                <li><NavLink className={styles.unactive} activeClassName={styles.active} to={'/statistic'}>Статистика  📈</NavLink></li>
                <li>Обмінник 💸</li>
                <li>Про нас  👨‍👩‍👦</li>
                <li>NFT  💻</li>
                <li>Нотатки  📒</li>
            </ul>

        </section >
    </React.Fragment >
}

export default Header