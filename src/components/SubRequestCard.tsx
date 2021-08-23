import {
  Box,
  Card, CardContent, IconButton, Tooltip, Typography,
} from '@material-ui/core';
import { AddBox } from '@material-ui/icons';
import React from 'react';

type Props = {
  subRequestId: number,
  date: Date,
  location: string,
  handleClaimSubRequest: (subRequestId: number) => void
}

const SubRequestCard = ({
  subRequestId,
  date,
  location,
  handleClaimSubRequest,
}: Props) => {
  const printDate = () => {
    console.log('something');
    return date.toDateString();
  };

  return (
    <Card sx={{
      display: 'flex',
      justifyContent: 'space-between'
    }} elevation={4} >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography component="div" variant="h5">
            Sunday 3/3/2021
          </Typography>
          <Typography component="div" variant="h5">
            4-5PM
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Sacred Heart Chapel
          </Typography>
        </CardContent>
      </Box >
      <Tooltip title="Claim Sub Request">
        < IconButton sx={{ alignSelf: 'center', marginLeft: 'auto', marginRight: 'auto' }} color="success">
          <AddBox sx={{ height: '3em', width: '3em' }} />
        </IconButton>
      </Tooltip>
    </Card >
  );
};

export default SubRequestCard;
