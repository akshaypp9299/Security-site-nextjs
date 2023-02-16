import styles from '../app/page.module.scss'


export default function PriceCard(props) {
    return (
        <>
            <div className="mb-5" style={{ width: `${props.width}rem` }}>
                <h4 className={`text-center ${styles.orange}`}>{props.type}</h4>
                <h2 className={`price text-center`}>${props.price}/month</h2>
                <p className={`text-center ${styles.priceSubText}`}>{props.team}</p>
                <button className={styles.upgrade}>UPGRADE</button>
                <div className='text-left mt-3'>{props.features[0]}</div>
                <div className='text-left mt-3'>{props.features[1]}</div>
                <div className='text-left mt-3'>{props.features[2]}</div>
                <div className='text-left mt-3'>{props.features[3]}</div>
                <div className='text-left mt-3'>{props.features[4]}</div>
            </div>
        </>
    )
}