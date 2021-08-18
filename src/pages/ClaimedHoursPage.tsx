import React, { useEffect, useState, useContext } from 'react';
import { Grid } from '@material-ui/core';
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

  const handleUnclaimHour = (timeSlotId:number) => {
    setDialogTimeSlotId(timeSlotId);
    setUnclaimHourDialogOpen(true);
  };

  const handleConfirmUnclaimHour = async () => {
    setUnclaimHourDialogOpen(false);
    await unclaimHour(token, dialogTimeSlotId);
    updateHours();
  };

  const handleCreateRequest = (timeSlotId:number, day:number) => {
    setDialogTimeSlotId(timeSlotId);
    setDialogDay(day);
    setRequestDialogOpen(true);
  };

  const handleConfirmCreateRequest = (chosenDate:Date) => {
    createSubRequest(token, dialogTimeSlotId, chosenDate).then(() => {
      updateHours();
      setRequestDialogOpen(false);
    });
  };

  const handleCancelRequest = (subRequestId:number) => {
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
