import { Fab, Grid, Zoom } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import React, { useContext, useEffect, useState } from 'react';
import ActionFab from '../components/ActionFab';
import AddHourDialog from '../components/dialogs/AddHourDialog';
import CreateRequestDialog from '../components/dialogs/CreateRequestDialog';
import UnclaimHourDialog from '../components/dialogs/UnclaimHourDialog';
import HourCard from '../components/HourCard';
import UserContext from '../contexts/UserContext';
import useHoursApi from '../service/useHoursApi';
import { Day } from '../types/Day';
import { HourCardRequirements } from '../types/HourCardRequirements';
import daysOfTheWeek from '../utilities/constants';

const AvailableHoursPage = () => {
  const [modalTimeSlotId, setModalTimeSlotId] = useState<number>(0);
  const [hours, setHours] = useState<HourCardRequirements[]>([]);
  const { adminParishIds } = useContext(UserContext);
  const [unclaimHourDialogOpen, setUnclaimHourDialogOpen] = useState<boolean>(false);
  const [createRequestDialogOpen, setCreateRequestDialogOpen] = useState<boolean>(false);
  const [addHourDialogOpen, setAddHourDialogOpen] = useState<boolean>(false);
  const [dialogDay, setDialogDay] = useState<number>(0);
  const [showAction, setShowAction] = useState(true);
  const isAdmin = adminParishIds.length > 0
  const { getHours, claimHour, createSubRequest, unclaimHour } = useHoursApi();
  const { token } = useContext(UserContext)

  const updateHours = async () => {
    const { data } = await getHours();
    setHours(data);
  };

  const handleClaimHour = async (timeSlotId: number) => {
    await claimHour(timeSlotId);
    updateHours();
  };

  const handleCreateRequest = (timeSlotId: number, day: number) => {
    setModalTimeSlotId(timeSlotId);
    setDialogDay(day);
    setCreateRequestDialogOpen(true);
  };

  const handleConfirmCreateRequest = (chosenDate: Date) => {
    createSubRequest(modalTimeSlotId, chosenDate).then(() => {
      updateHours();
      setCreateRequestDialogOpen(false);
    });
  };

  const handleUnclaimHour = (timeSlotId: number) => {
    setUnclaimHourDialogOpen(true);
    setModalTimeSlotId(timeSlotId);
  };

  const handleConfirmUnclaimHour = async () => {
    setUnclaimHourDialogOpen(false);
    await unclaimHour(modalTimeSlotId);
    updateHours();
  };

  const getHoursForDay = (
    listOfHours: HourCardRequirements[],
    day: number,
  ): HourCardRequirements[] => {
    const filteredHours = listOfHours.filter((hour) => hour.day === day);
    return filteredHours.sort((a, b) => a.hour - b.hour);
  };

  useEffect(() => {
    updateHours();
  }, [token]);

  const renderHours = (day: Day) => {
    const hoursForDay = getHoursForDay(hours, day.index);

    return (hoursForDay?.map((hour) => (
      <Grid item xs={12} sm={8} md={4}>
        <HourCard
          timeSlotId={hour.timeSlotId}
          key={`${hour.hour} ${hour.day}`}
          hour={hour.hour}
          day={hour.day}
          parishId={hour.parishId}
          isClaimedByUser={hour.isClaimedByUser}
          location={hour.location}
          adorerCount={hour.adorerCount}
          minimumAdorers={hour.minimumAdorers}
          handleClaimHour={handleClaimHour}
          handleUnclaimHour={handleUnclaimHour}
          handleCancelSubRequest={() => Error('Should not be able to cancel sub requests from this card.')}
          handleCreateSubRequest={handleCreateRequest}
          showProgress
        />
      </Grid>
    )));
  };

  return (
    <>
      <Grid container spacing={3} sx={{ marginBottom: '20px' }}>
        {daysOfTheWeek.map((day) => (
          renderHours(day)
        ))}
      </Grid>
      <ActionFab
        icon={<AddIcon />}
        ariaLabel="Add Hour"
        hide={!isAdmin}
        handleClick={() => setAddHourDialogOpen(true)}
      />
      <UnclaimHourDialog
        open={unclaimHourDialogOpen}
        handleClose={() => setUnclaimHourDialogOpen(false)}
        handleConfirmUnclaimHour={handleConfirmUnclaimHour}
      />
      <CreateRequestDialog
        open={createRequestDialogOpen}
        handleClose={() => setCreateRequestDialogOpen(false)}
        handleConfirmCreateRequest={handleConfirmCreateRequest}
        day={dialogDay}
      />
      <AddHourDialog
        open={addHourDialogOpen}
        handleClose={() => setAddHourDialogOpen(false)}
        handleConfirmAddHour={() => console.log("hey")}
      />
    </>
  );
};

export default AvailableHoursPage;
