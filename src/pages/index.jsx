import styles from '../styles/Home.module.css'

import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
          <link rel="stylesheet" href="/dist/output.css" />
      </Head>
      <div>
        <h1 class="text-3xl font-bold underline">
        Hello world!
        </h1>
      </div>
    </div>
  )
}
