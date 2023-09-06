/**
 * @file SideDrawer.tsx
 * @brief SideDrawer Object
 * @date 2021-09-22
 *
 *
 */

import React from 'react'

import Drawer, { DrawerProps } from '@mui/material/Drawer'

interface Props extends DrawerProps {
  drawerWidth?: number | string
}
export const SideDrawer: React.FC<Props> = ({ open, drawerWidth = '30vw', children, ...args }) => {
  return (
    <Drawer
      aria-label="sidedrawer"
      {...args}
      variant="persistent"
      anchor="right"
      open={open}
      sx={{
        height: '100vh',
        maxHeight: '100vh',
        width: drawerWidth,
        maxWidth: drawerWidth,
        flexShrink: 0,
      }}
      PaperProps={{
        sx: {
          padding: '12px 12px 0',
          borderRadius: 3,
          maxHeight: '100vh',
          maxWidth: drawerWidth,
          width: drawerWidth,
          flex: '0 0 auto',
        },
      }}
    >
      {open && children}
    </Drawer>
  )
}
