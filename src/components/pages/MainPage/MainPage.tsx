import React from 'react'
import { Box, styled } from '@mui/material'

import { SideDrawerButton } from 'components/atoms/Buttons'
import { MainWorkspace, MainSideDrawer } from 'components/organisms'

export const Page = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'row',
  marginLeft: theme.spacing(1),
  height: 'fit-content',
  minHeight: '100vh',
  marginTop: 0.5,
}))

const MainPage = () => {
  const [open, setOpen] = React.useState<boolean>(false)

  return (
    <Page>
      <MainWorkspace compactView={open} />
      <SideDrawerButton open={open} onClick={() => setOpen(!open)} />
      <MainSideDrawer open={open} />
    </Page>
  )
}

export default MainPage
