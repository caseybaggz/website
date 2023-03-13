import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <header>
        <h1>Hello there</h1>
        <p>Here is some content</p>
      </header>

      <section className={styles.feature}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
          maxime praesentium, voluptatibus a dolorem quae? Placeat, voluptates
          similique fugit alias porro blanditiis est quia animi voluptatibus
          unde ut consequatur velit.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
          maxime praesentium, voluptatibus a dolorem quae? Placeat, voluptates
          similique fugit alias porro blanditiis est quia animi voluptatibus
          unde ut consequatur velit.
        </p>
      </section>
    </main>
  )
}
