import React from 'react'
import { styled } from '@mui/material/styles'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

// styled elements
interface SideDrawerButtonProps extends IconButtonProps {
  open?: boolean
}
// The SideDrawerButton is located on the top-left of the screen
// it controls the sideDrawer and rotates 180° when it is open
const StyledButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'open',
})<SideDrawerButtonProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  position: 'fixed',
  top: 0,
  right: 0,
  marginTop: theme.spacing(1.5),
  marginRight: theme.spacing(1),

  // closed
  border: 'thin solid',
  backgroundColor: theme.palette.background.default,
  transform: 'rotate(0)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.leavingScreen,
    easing: theme.transitions.easing.sharp,
  }),

  // open
  ...(open && {
    backgroundColor: 'transparent',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeOut,
    }),
    transform: `rotate(-180deg)`,
  }),
}))

export const SideDrawerButton = React.memo<SideDrawerButtonProps>((props) => {
  return (
    <StyledButton color="primary" aria-label="side-drawer-button" {...props}>
      <ChevronLeftIcon />
    </StyledButton>
  )
})
