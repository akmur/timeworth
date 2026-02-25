import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Timeworth ⏳💰</div>
      <div className={styles.subtitle}>
        How long do you have to work
        <br />
        to buy that?
      </div>
    </header>
  )
}
