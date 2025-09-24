import styles from './TradeBoothSection.module.css'

export default function TradeBoothSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>Projektowanie Stoisk Targowych w Canvie</h2>
          <p className={styles.description}>
            W Studioexpress rozumiemy, że w większości firm to dział marketingu odpowiada za
            przygotowanie projektu stoiska. Dlatego nasze systemy dopasowaliśmy do pracy w Canvie –
            prostym narzędziu, które nie wymaga specjalistycznej wiedzy graficznej. Dostarczamy
            gotowe wykrojniki w skali 1:10 i wysokiej rozdzielczości, tak aby projekt można było
            przygotować w godzinę, bez ryzyka błędów. Każdy plik przed drukiem sprawdzamy, co daje
            gwarancję poprawności w druku wielkoformatowym.
          </p>
          <a
            className={styles.primaryLink}
            href="https://www.youtube.com/watch?v=215MtbSAIdY&t=1s"
            target="_blank"
            rel="noreferrer"
          >
            Film o Wytycznych
          </a>
        </div>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src="/userdata/public/assets/Stoiska/baner%201%20czarny.svg"
            alt="kreatywny grafik projektujący w cnva"
          />
        </div>
      </div>
    </section>
  )
}
