import * as React from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '../src/components/Link'
import { Button } from '@mui/material'

const Home: NextPage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            FreeWayDao 🚕
          </Typography>
          <Button>
            <Link href="/V1" color="secondary">
              Launch App
            </Link>
          </Button>
        </Box>
      </Container>
    </>
  )
}

export default Home
