import styles from './Coins.module.css'
import Link from 'next/link'
function Coins({ name, price, symbol, marketcap, volume, image, priceChange, id }) {
    return (
        <Link href='/Coin/[id]' as={`/Coin/${id}`} passHref={true}>
            <a>
                <div className={styles.coin_container}>
                    <div className={styles.coin_row}>
                        <div className={styles.coin}>
                            <img src={image} alt={name} className={styles.coin_img} />
                            <h1 className={styles.coin_h1}>{name}</h1>
                            <p className={styles.coin_symbol}>{symbol}</p>
                        </div>
                        <div className={styles.coin_data}>
                            <p className={styles.coin_price}>Rp.{new Intl.NumberFormat('id-ID').format(price)}</p>
                            <p className={styles.coin_volume}>{volume.toLocaleString()}</p>
                            <p className={`${styles.coin_percent} ${priceChange < 0 ? `${styles.red}` : `${styles.success}`}`}>{priceChange.toFixed(2)}%</p>
                            <p className={styles.coin_marketcap}>Market Cap {marketcap.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Coins