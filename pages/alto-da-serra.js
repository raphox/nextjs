import { GoogleSpreadsheet } from "google-spreadsheet";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function AutoDaSerra({ products }) {
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
        <h2>Alto da Serra</h2>

        <table className={styles.table}>
          <thead>
            <th>Produto</th>
            <th>Unidades</th>
            <th>Vencimento</th>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.units}</td>
                <td>{item.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
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

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const doc = new GoogleSpreadsheet(
    "1d6yRJH1UYqLhIc6MgGlnmSVPH8d-Q4v7SF2gjCLe_1o"
  );

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  });

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  let products = rows.map((item) => ({
    name: item.Produto,
    units: item.Unidades,
    due: item.Vencimento,
  }));

  return {
    props: {
      products,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 60 seconds
    revalidate: 60, // In seconds
  };
}
