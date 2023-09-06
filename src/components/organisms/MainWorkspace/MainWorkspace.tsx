import { Typography, Theme, useTheme } from '@mui/material'

import { top10Films } from 'components/atoms'
import { Block } from 'components/molecules'

export function getStyle(
  theme: Theme,
  sideDrawerWidth: string,
  compactView: boolean
): React.CSSProperties {
  return {
    padding: `0 ${theme.spacing(1)}`,

    width: '100%',
    marginTop: '0',
    marginLeft: '0',
    marginBottom: '0',
    zIndex: theme.zIndex.drawer,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(1),

    // side drawer closed
    marginRight: `-${sideDrawerWidth}`, // Thanks to https://stackoverflow.com/a/33023649/14020329
    transition: theme.transitions.create(['margin', 'gridTemplateColumns'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    // side drawer open
    ...(compactView && {
      marginRight: 0,
      transition: theme.transitions.create(['margin', 'gridTemplateColumns'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }
}

interface MainWorkspaceProps {
  compactView: boolean
  drawerWidth?: string
}

export const MainWorkspace: React.FC<MainWorkspaceProps> = ({
  drawerWidth = '30vw',
  compactView,
}) => {
  const theme = useTheme()
  return (
    <div style={getStyle(theme, drawerWidth, compactView)} aria-label="MainWorkspace">
      <Typography variant="h4">Workspace</Typography>
      {top10Films.map((props) => (
        <Block {...props} key={props.label} />
      ))}
    </div>
  )
}
