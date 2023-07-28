import { useDispatch, useSelector } from "react-redux"
import { currenciesSliceActions } from "../../Store/currencies-slice"
import { Fragment, useEffect, useState } from "react"
import styles from './Statistic.module.css'


const filteredSupply1 = (supply) => {
    const supplyToArr = supply.toString().slice(1,).split('')
    if (supplyToArr.length >= 6 && supplyToArr.length < 9) {
        switch (supplyToArr.length) {
            case 6: return supply.toString().slice(0, 1) + '.' + supply.toString().slice(2, 4) + 'M';
            case 7: return supply.toString().slice(0, 2) + '.' + supply.toString().slice(3, 5) + 'M';
            case 8: return supply.toString().slice(0, 3) + '.' + supply.toString().slice(4, 6) + 'M';
            default: return supplyToArr
        }
    }
    if (supplyToArr.length >= 9 && supplyToArr.length <= 11) {
        switch (supplyToArr.length) {
            case 9: return supply.toString().slice(0, 1) + '.' + supply.toString().slice(2, 4) + 'B';
            case 10: return supply.toString().slice(0, 2) + '.' + supply.toString().slice(3, 5) + 'B';
            case 11: return supply.toString().slice(0, 3) + '.' + supply.toString().slice(4, 6) + 'B';
            default: return supplyToArr
        }
    }
}
const filteredSupply = (supply) => {
    const supplyToArr = supply.toString().slice(1,).split('')
    switch (supplyToArr.length) {
        case 6: return supply.toString().slice(0, 1) + '.' + supply.toString().slice(2, 4) + 'M';
        case 7: return supply.toString().slice(0, 2) + '.' + supply.toString().slice(3, 5) + 'M';
        case 8: return supply.toString().slice(0, 3) + '.' + supply.toString().slice(4, 6) + 'M';
        case 9: return supply.toString().slice(0, 1) + '.' + supply.toString().slice(2, 4) + 'B';
        case 10: return supply.toString().slice(0, 2) + '.' + supply.toString().slice(3, 5) + 'B';
        case 11: return supply.toString().slice(0, 3) + '.' + supply.toString().slice(4, 6) + 'B';
        default: return supplyToArr
    }
}

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
                    <h1>{filteredSupply(el.circulatingSupply)}</h1>
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