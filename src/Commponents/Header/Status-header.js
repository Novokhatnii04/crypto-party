import { useDispatch, useSelector } from 'react-redux'
import styles from './Status-header.module.css'
import { headerStatusBarAction } from '../../Store/header-status-bar-slice'
import { useEffect, useState } from 'react'

const StatusHeader = () => {

    const [loading, setLoad] = useState(false)
    const dispatch = useDispatch()

    const {
        allCurrencies: currencies,
        activeCurrencies: activeCur,
        totalVolume24h: total24currencies,
        btcDominance: btcInfoDom } = useSelector((state) => state.headerStatusBar)

    useEffect(() => {

        function sliceText(sum) {
            const sumString = Math.round(sum).toString()
            const firstCount = sumString.slice(0, 2)
            const secondCount = sumString.slice(2, 4)
            return (firstCount + '.' + secondCount + 'B')
        }

        (async function fetchRequestCrypto() {
            setLoad(true)
            const responce = await fetch('https://api.cryptorank.io/v1/global?api_key=bb1874269a3e9008634c774e4bfa4d9cc26def340ceaef3d967c90950792')
            const responceData = await responce.json()
            dispatch(headerStatusBarAction.getInfoForStatusbar({
                allCurrencies: responceData.data.allCurrencies,
                activeCurrencies: responceData.data.activeCurrencies,
                totalVolume24h: sliceText(responceData.data.values.USD.totalVolume24h),
                btcDominance: responceData.data.btcDominance.toFixed(2) + '%'
            }))
            setLoad(false)
        })()

    }, [])


    return <div className={styles.header}>
        <ul className={styles.lists}>
            <li className={styles.curWithLoad}>Криптовалюти:
                {!loading ? <span className={styles.info}>{currencies}</span>
                    : <div className={styles['custom-loader']}></div>} </li>
            <li className={styles.curWithLoad}>Активні валюти:
                {!loading ? <span className={styles.info}>{activeCur}</span>
                    : <div className={styles['custom-loader']}></div>} </li>
            <li className={styles.curWithLoad}>Об`єм 24ч $:
                {!loading ? <span className={styles.vol}>{total24currencies}</span>
                    : <div className={styles['custom-loader']}></div>} </li>
            <li className={styles.curWithLoad}>BTC домінація:
                {!loading ? <span className={styles.vol}>{btcInfoDom}</span>
                    : <div className={styles['custom-loader']}></div>} </li>
        </ul>
    </div>
}

export default StatusHeader