import React, { useEffect, useState, useContext } from 'react';
import { Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import HourCard from '../components/HourCard';
import UserContext from '../contexts/UserContext';
import {
  cancelSubRequest,
  createSubRequest,
  getClaimedHours,
  unclaimHour,
} from '../service/hoursService';
import { HourCardRequirements } from '../types/HourCardRequirements';
import UnclaimHourDialog from '../components/dialogs/UnclaimHourDialog';
import CreateRequestDialog from '../components/dialogs/CreateRequestDialog';
import CancelRequestDialog from '../components/dialogs/CancelRequestDialog';

const ClaimedHoursPage = () => {
  const [hours, setHours] = useState<HourCardRequirements[]>([]);
  const [dialogTimeSlotId, setDialogTimeSlotId] = useState(0);
  const [dialogSubRequestId, setDialogSubRequestId] = useState(0);
  const [dialogDay, setDialogDay] = useState<number>(0);
  const [unclaimHourDialogOpen, setUnclaimHourDialogOpen] = useState(false);
  const [createRequestDialogOpen, setRequestDialogOpen] = useState(false);
  const [cancelRequestDialogOpen, setCancelRequestDialogOpen] = useState(false);
  const { token } = useContext(UserContext);

  const updateHours = () => {
    getClaimedHours(token).then(({ data }) => {
      setHours(data);
    });
  };

  const handleUnclaimHour = (timeSlotId: number) => {
    setDialogTimeSlotId(timeSlotId);
    setUnclaimHourDialogOpen(true);
  };

  const handleConfirmUnclaimHour = async () => {
    setUnclaimHourDialogOpen(false);
    await unclaimHour(token, dialogTimeSlotId);
    updateHours();
  };

  const handleCreateRequest = (timeSlotId: number, day: number) => {
    setDialogTimeSlotId(timeSlotId);
    setDialogDay(day);
    setRequestDialogOpen(true);
  };

  const handleConfirmCreateRequest = (chosenDate: Date) => {
    createSubRequest(token, dialogTimeSlotId, chosenDate).then(() => {
      updateHours();
      setRequestDialogOpen(false);
    });
  };

  const handleCancelRequest = (subRequestId: number) => {
    setDialogSubRequestId(subRequestId);
    setCancelRequestDialogOpen(true);
  };

  const handleConfirmCancelRequest = () => {
    cancelSubRequest(token, dialogSubRequestId).then(() => {
      updateHours();
      setCancelRequestDialogOpen(false);
    });
  };

  useEffect(() => {
    updateHours();
  }, []);

  return (
    <>
      <Grid container spacing={3} sx={{ marginBottom: '20px' }}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardHeader
              title="Sub Requests By You"
            />
            <CardContent>
              <Typography>This is where your current sub requests are</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardHeader
              title="Picked Up Sub Requests"
            />
            <CardContent>
              <Typography>Sub Requests that you've picked up from other people</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography variant='h4' sx={{ marginBottom: '20px' }}>Your Hours</Typography>
      <Grid container spacing={3}>
        {hours.map((hour) => (
          <Grid item xs={12} sm={8} md={4}>
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
              showRequests
              handleUnclaimHour={handleUnclaimHour}
              handleClaimHour={() => Error('Should not be able to claim on this page')}
              handleCreateSubRequest={handleCreateRequest}
              handleCancelSubRequest={handleCancelRequest}
            />
          </Grid>
        ))}
      </Grid>
      <UnclaimHourDialog
        open={unclaimHourDialogOpen}
        handleConfirmUnclaimHour={handleConfirmUnclaimHour}
        handleClose={() => setUnclaimHourDialogOpen(false)}
      />
      <CreateRequestDialog
        open={createRequestDialogOpen}
        handleClose={() => setRequestDialogOpen(false)}
        handleConfirmCreateRequest={handleConfirmCreateRequest}
        day={dialogDay}
      />
      <CancelRequestDialog
        open={cancelRequestDialogOpen}
        handleClose={() => setCancelRequestDialogOpen(false)}
        handleConfirmCancelRequest={handleConfirmCancelRequest}
      />
    </>
  );
};

export default ClaimedHoursPage;
