import { Fab, Zoom } from '@material-ui/core';
import React from 'react'

type Props = {
  hide?: boolean,
  icon: React.ReactNode,
  ariaLabel?: string,
  handleClick: () => void
}

const ActionFab = ({
  hide,
  icon,
  ariaLabel,
  handleClick
}: Props) => {
  return (
    <Zoom
      in={!hide}
    >
      <Fab
        color='secondary'
        aria-label={ariaLabel || "action"}
        onClick={() => handleClick()}
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px'
        }}
      >
        {icon}
      </Fab>
    </Zoom>
  );
}

export default ActionFab;