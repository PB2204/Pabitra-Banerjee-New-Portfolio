import '../styles/globals.css'
import Head from 'next/head'
import Layout from './layout'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pabitra Banerjee | New Developer Portfolio</title>
        <meta name="description" content="Pabitra Banerjee is a Full-Stack AI Engineer with some knowledge of Blockchain Technology and a tech enthusiast. He is the Founder & CEO of MB WEBBER’S, a Software Development company based on Manbazar, Purulia, West Bengal. He is the Founder & CEO of some more companies based on Manbazar, like — Code Explorer, Dev Line Community, etc. He is working actively to spread Science & Technology to the common people. He is very fond of Astrophysics & Mathematics. He writes actively about Astrophysics and latest space missions by all of the space agencies on Universal Space Missions." />
        <meta name="keywords" content="Pabitra Banerjee, Full-Stack AI Engineer, Blockchain Technology, tech enthusiast, Founder, CEO, MB WEBBER’S, Software Development, Manbazar, Purulia, West Bengal, Code Explorer, Dev Line Community, Science & Technology, Astrophysics, Mathematics, space missions, Universal Space Missions" />
        <meta name="author" content="Pabitra Banerjee" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Pabitra Banerjee | New Developer Portfolio" />
        <meta property="og:description" content="Pabitra Banerjee is a Full-Stack AI Engineer with some knowledge of Blockchain Technology and a tech enthusiast. He is the Founder & CEO of MB WEBBER’S, a Software Development company based on Manbazar, Purulia, West Bengal. He is the Founder & CEO of some more companies based on Manbazar, like — Code Explorer, Dev Line Community, etc. He is working actively to spread Science & Technology to the common people. He is very fond of Astrophysics & Mathematics. He writes actively about Astrophysics and latest space missions by all of the space agencies on Universal Space Missions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pabitrabanerjee.me" />
        <meta property="og:image" content="https://pabitrabanerjee.me/img/avatar.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pabitra Banerjee | New Developer Portfolio" />
        <meta name="twitter:description" content="Pabitra Banerjee is a Full-Stack AI Engineer with some knowledge of Blockchain Technology and a tech enthusiast. He is the Founder & CEO of MB WEBBER’S, a Software Development company based on Manbazar, Purulia, West Bengal. He is the Founder & CEO of some more companies based on Manbazar, like — Code Explorer, Dev Line Community, etc. He is working actively to spread Science & Technology to the common people. He is very fond of Astrophysics & Mathematics. He writes actively about Astrophysics and latest space missions by all of the space agencies on Universal Space Missions." />
        <meta name="twitter:image" content="https://pabitrabanerjee.me/img/avatar.jpg" />
        <link rel="icon" href="https://pabitrabanerjee.me/img/logo-big.png" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  )
}
