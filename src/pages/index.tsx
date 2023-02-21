import { Inter } from "@next/font/google";
import Head from "next/head";
import { Table } from "../modules/Table/Table";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Orca test project</title>
        <meta name="description" content="Orca test project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Table />
      </main>
    </>
  );
}
