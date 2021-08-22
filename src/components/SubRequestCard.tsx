import {
  Card, CardActions, CardHeader, IconButton, Tooltip,
} from '@material-ui/core';
import { AddBox } from '@material-ui/icons';
import React from 'react';

type Props = {
  subRequestId:number,
  date:Date,
  location:string,
  handleClaimSubRequest: (subRequestId:number) => void
}

const SubRequestCard = ({
  subRequestId,
  date,
  location,
  handleClaimSubRequest,
}:Props) => {
  const printDate = () => {
    console.log('something');
    return date.toDateString();
  };

  return (
    <Card elevation={4}>
      <CardHeader
        title={printDate()}
        subheader={location}
      />
      <CardActions disableSpacing>
        <Tooltip title="Claim Sub Request">
          <IconButton
            color="success"
            onClick={() => handleClaimSubRequest(subRequestId)}
          >
            <AddBox />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default SubRequestCard;
