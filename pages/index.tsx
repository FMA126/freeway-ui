import type { NextPage } from 'next'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>FreeWayDao</title>
        <meta name="description" content="Ride sharing for web3" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography component="h1">
            FreeWayDAO
          </Typography>
          <div>🚕</div>
        </Container>
      </main>
    </>
  )
}

export default Home
