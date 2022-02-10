import { Fragment, KeyboardEvent, MouseEvent, useState } from 'react'
import Link from '../Link'
import { useRouter } from 'next/router'

import { useTheme } from '@mui/material/styles'
import styles from './NavDrawer.module.css'

import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi'
import HailIcon from '@mui/icons-material/Hail'
import TimelineIcon from '@mui/icons-material/Timeline'
import MenuIcon from '@mui/icons-material/Menu'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { Typography } from '@mui/material'

export default function NavDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()
  const router = useRouter()

  const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setIsOpen(open)
  }

  const listIcons = {
    INBOX_ICON: <InboxIcon color="secondary" />,
  }
  const list = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <>
        <div className={styles.profileContainer}>
          <div className={styles.profilePicContainer}>
            <div className={styles.profilePicEmpty}>
              <AddCircleIcon fontSize="medium" />
            </div>
          </div>
          <Typography className={styles.addProfilePicIcon} variant="h4" component="h4">
            Name
          </Typography>
        </div>
      </>
      <List>
        {['Messages', 'Trips'].map((text, index, listArray) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? listIcons.INBOX_ICON : <TimelineIcon color="secondary" />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider color="seconday" />
      <List>
        {['Driver', 'Rider'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <HailIcon color="secondary" /> : <LocalTaxiIcon color="secondary" />}
            </ListItemIcon>
            <ListItemText
              primary={
                <Link noLinkStyle={false} href={`${router.pathname}/${text.toLowerCase()}`}>
                  {text}
                </Link>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      <Fragment>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon color="primary" fontSize="large" />
        </Button>
        <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
          {list}
        </Drawer>
      </Fragment>
    </div>
  )
}
