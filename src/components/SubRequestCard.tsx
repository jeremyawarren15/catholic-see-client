import {
  Button,
  Card, CardActions, CardContent, Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { SubRequestCardRequirements } from '../types/SubRequestCardRequirements';
import daysOfTheWeek from '../utilities/constants';
import { getHourTimeSpanString } from '../utilities/timeFormatter';

const SubRequestCard = ({
  subRequestId,
  location,
  dateOfSubstitution,
  timeSlotHour,
  handlePickUpSubRequest,
}: SubRequestCardRequirements) => {
  const [isRaised, setIsRaised] = useState(false);

  const handleMouseEnter = () => {
    setIsRaised(true);
  };

  const handleMouseLeave = () => {
    setIsRaised(false);
  };

  return (
    <Card
      raised={isRaised}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardContent>
        <Typography component="div" variant="h5">
          {daysOfTheWeek[dateOfSubstitution.getDay()].value + ' ' + dateOfSubstitution.toLocaleDateString()}
        </Typography>
        <Typography component="div" variant="h5">
          {getHourTimeSpanString(timeSlotHour)}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {location}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="success"
          onClick={() => handlePickUpSubRequest(subRequestId)}
        >
          Pick Up
        </Button>
      </CardActions>
    </Card >
  );
};

export default SubRequestCard;
