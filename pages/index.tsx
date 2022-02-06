// import type { NextPage } from 'next'
// import Head from 'next/head'
// import CssBaseline from '@mui/material/CssBaseline'
// import Container from '@mui/material/Container'
// import Typography from '@mui/material/Typography'

// const Home: NextPage = () => {
//   return (
//     <>
//       <Head>
//         <title>FreeWayDao</title>
//         <meta name="description" content="Ride sharing for web3" />
//         <meta name="viewport" content="initial-scale=1, width=device-width" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <CssBaseline />
//         <Container maxWidth="sm">
//           <Typography component="h1">
//             FreeWayDAO
//           </Typography>
//           <div>🚕</div>
//         </Container>
//       </main>
//     </>
//   )
// }

// export default Home

import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/components/Link';


const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          FreeWayDao 🚕
        </Typography>
        <Link href="/V1" color="secondary">
          Launch App
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
