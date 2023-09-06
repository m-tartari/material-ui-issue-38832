import React from 'react'
import { Link, Typography } from '@mui/material'

import { SideDrawer } from 'components/templates'

interface MainSidedrawerProps {
  open: boolean
}

export const MainSideDrawer: React.FC<MainSidedrawerProps> = ({ open }) => {
  return (
    <SideDrawer open={open}>
      <Typography variant="h4">SideDrawer</Typography>
      <Link variant="h6" href="https://github.com/mui/material-ui/issues">
        mui/material-ui issues
      </Link>
    </SideDrawer>
  )
}
