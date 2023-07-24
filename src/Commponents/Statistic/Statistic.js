import { useDispatch, useSelector } from "react-redux"
import { currenciesSliceActions } from "../../Store/currencies-slice"
import { Fragment, useEffect, useState } from "react"
import styles from './Statistic.module.css'

const Statistic = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const currenciesTokens = useSelector((state) => state.currenciesSlice.currencies)

    useEffect(() => {

        setLoading(true)
        const fetchRequestCrypto = async () => {
            const responce = await fetch('https://api.cryptorank.io/v1/currencies?api_key=bb1874269a3e9008634c774e4bfa4d9cc26def340ceaef3d967c90950792')
            const responceData = await responce.json()
            console.log(responceData)
            await responceData.data.slice(0, 10).map((el) => dispatch(currenciesSliceActions.getTokens({
                id: el.id,
                rank: el.rank,
                name: el.name,
                symbol: el.symbol,
                price: el.values.USD.price,
                circulatingSupply: el.circulatingSupply,
                volume24h: el.values.USD.volume24h
            })))
        }
        if (currenciesTokens.length === 0) {
            fetchRequestCrypto()
        }
        setLoading(false)
    }, [])

    function getNumbers(num) {
        const integerPart = Math.floor(num);
        const fractionalPart = (num - integerPart).toFixed(2).slice(2);
        return `${integerPart}.${fractionalPart}`;
    }

    const isLoadFetch = loading ? <div className={styles['custom-loader']}></div> : <div className={styles.content}>
        <div className={styles.cardForInfo}>
            <h1>#</h1>
            <h1>Назва</h1>
            <h1>Ціна</h1>
            <h1>Саплай</h1>
        </div>
        {currenciesTokens.map(el => {
            return (
                <div key={el.id} className={styles.card} >
                    <h1>{el.rank}</h1>
                    <h1>{el.name}</h1>
                    <h1>{el.symbol}</h1>
                    <h1> $ {getNumbers(el.price)}</h1>
                    <h1>{el.circulatingSupply}</h1>
                </div>
            )
        })
        }
    </div>

    return <Fragment>
        {isLoadFetch}
    </Fragment>
}

export default Statistic