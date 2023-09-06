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
      <Link variant="h6" href="mui/material-ui#38832">
        mui/material-ui #38832
      </Link>
    </SideDrawer>
  )
}
