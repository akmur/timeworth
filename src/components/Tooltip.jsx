import InfoCircle from './InfoCircle'
import styles from './Tooltip.module.css'

export default function Tooltip({ text }) {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.icon}>
          <InfoCircle />
        </div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  )
}
