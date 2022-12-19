import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div
        className={styles.imageLogo}
        role="img"
        aria-label="Logo do Sorteador"
      ></div>
      <img
        className="participant"
        src="/images/participante.png"
        alt="Participante com um presente na mão"
      />
    </header>
  )
}
