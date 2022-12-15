import React from 'react'
import { SpeedDial,   SpeedDialAction, SpeedDialIcon } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ContentCutIcon from '@mui/icons-material/ContentCut';
export const MuiSpeedDial = () => {
  return (
    <SpeedDial
    ariaLabel='Navigation Speed dial'
    sx={{position: 'absolute', bottom: 16, right: 16}}
    icon={<SpeedDialIcon/>}
    >
        <SpeedDialAction icon={<ContentCopyIcon/>} tooltipTitle='Copy' tooltipOpen />
        <SpeedDialAction icon={<ContentPasteIcon/>} tooltipTitle='Past' tooltipOpen />
        <SpeedDialAction icon={<ContentCutIcon/>} tooltipTitle='Cut' tooltipOpen />
    </SpeedDial>
  )
}
