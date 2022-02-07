import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import { Fragment, KeyboardEvent, MouseEvent, useState } from 'react'
import Link from '../Link'
import { useRouter } from 'next/router'

export default function NavDrawer() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setIsOpen(open)
  }

  const router = useRouter()

  const list = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Driver', 'Rider'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={<Link href={`${router.pathname}/${text.toLowerCase()}`}>{text}</Link>} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      <Fragment>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Button>
        <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
          {list}
        </Drawer>
      </Fragment>
    </div>
  )
}
