import styles from '../app/page.module.scss'

export default function PricingCompHead(props) {
    return (
        <th className={styles.pricingCard}>
            <h4 className={`text-center ${styles.orange}`}>{props.type}</h4>
            <h2 className={`price text-center`}>${props.price}/month</h2>
            <p className={`text-center ${styles.priceSubText}`}>{props.team}</p>
            <button className={styles.upgrade}>UPGRADE</button></th>
    )
}