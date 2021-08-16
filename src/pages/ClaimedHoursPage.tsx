import React, { useEffect, useState, useContext } from 'react';
import { Grid } from '@material-ui/core';
import HourCard from '../components/HourCard';
import UserContext from '../contexts/UserContext';
import {
  cancelSubRequest, createSubRequest, getClaimedHours, unclaimHour,
} from '../service/hoursService';
import { HourCardRequirements } from '../types/HourCardRequirements';

const ClaimedHoursPage = () => {
  const [hours, setHours] = useState<HourCardRequirements[]>([]);
  const [modalTimeSlotId, setModalTimeSlotId] = useState(0);
  const [modalSubRequestId, setModalSubRequestId] = useState(0);
  const { token } = useContext(UserContext);

  const updateHours = () => {
    getClaimedHours(token).then(({ data }) => {
      setHours(data);
    });
  };

  useEffect(() => {
    updateHours();
  }, []);

  return (
    <Grid container spacing={3}>
      {hours.map((hour) => (
        <Grid item xs={12}>
          <HourCard
            timeSlotId={hour.timeSlotId}
            key={hour.timeSlotId}
            hour={hour.hour}
            day={hour.day}
            isClaimedByUser
            location={hour.location}
            minimumAdorers={hour.minimumAdorers}
            adorerCount={hour.adorerCount}
            subRequests={hour.subRequests}
            parishId={hour.parishId}
            handleUnclaimHour={setModalTimeSlotId}
            handleClaimHour={() => Error('Should not be able to claim on this page')}
            handleCreateSubRequest={setModalTimeSlotId}
            handleCancelSubRequest={setModalSubRequestId}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ClaimedHoursPage;
