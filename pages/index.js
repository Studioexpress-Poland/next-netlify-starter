import Head from 'next/head'
import Footer from '@components/Footer'
import TradeBoothSection from '@components/TradeBoothSection'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TradeBoothSection />
      </main>

      <Footer />
    </div>
  )
}
