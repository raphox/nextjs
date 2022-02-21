import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ajude a cidade de Petrópolis</title>
        <meta
          name="description"
          content="Campanha de solidariedade para auxiliar a vítimas das catastrofes climiticas dos últimos dias"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ajude a cidade de{" "}
          <a href="https://www.petropolis.rj.gov.br/pmp/">Petrópolis!</a>
        </h1>

        <p className={styles.description}>
          Selecione o bairro mais próximo de você
        </p>

        <div className={styles.grid}>
          <Link href="/alto-da-serra">
            <a className={styles.card}>
              <h2>Alto da Serra</h2>
              <p>
                Rua Doutor Napoleão Laureano; R. Cel. Albino Siqueira; R.
                Conrado Klippel; ...
              </p>
            </a>
          </Link>

          <Link href="/alto-da-serra">
            <a className={styles.card}>
              <h2>Alto da Serra</h2>
              <p>
                Rua Doutor Napoleão Laureano; R. Cel. Albino Siqueira; R.
                Conrado Klippel; ...
              </p>
            </a>
          </Link>

          <Link href="/alto-da-serra">
            <a className={styles.card}>
              <h2>Alto da Serra</h2>
              <p>
                Rua Doutor Napoleão Laureano; R. Cel. Albino Siqueira; R.
                Conrado Klippel; ...
              </p>
            </a>
          </Link>

          <Link href="/alto-da-serra">
            <a className={styles.card}>
              <h2>Alto da Serra</h2>
              <p>
                Rua Doutor Napoleão Laureano; R. Cel. Albino Siqueira; R.
                Conrado Klippel; ...
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
