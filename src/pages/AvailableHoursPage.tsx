import { Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import Accordion from '../components/Accordion';
import AccordionItem from '../components/AccordionItem';
import HourCard from '../components/HourCard';
import CreateRequestModal from '../components/modals/CreateRequestModal';
import UnclaimHourModal from '../components/modals/UnclaimHourModal';
import UserContext from '../contexts/UserContext';
import {
  claimHour, createSubRequest, getHours, unclaimHour,
} from '../service/hoursService';
import { Day } from '../types/Day';
import { HourCardRequirements } from '../types/HourCardRequirements';
import daysOfTheWeek from '../utilities/constants';

const AvailableHoursPage = () => {
  const [modalTimeSlotId, setModalTimeSlotId] = useState<number>(0);
  const [hours, setHours] = useState<HourCardRequirements[]>([]);
  const { token } = useContext(UserContext);

  const updateHours = async () => {
    const { data } = await getHours(token);
    setHours(data);
  };

  const handleClaimHour = async (timeSlotId:number) => {
    await claimHour(token, timeSlotId);
    updateHours();
  };

  const handleConfirmCreateRequest = () => {
    createSubRequest(token, modalTimeSlotId, new Date('2/2/2021')).then(() => {
      updateHours();
    });
  };

  const handleConfirmUnclaimHour = async () => {
    await unclaimHour(token, modalTimeSlotId);
    updateHours();
  };

  const getHoursForDay = (
    listOfHours:HourCardRequirements[],
    day:number,
  ):HourCardRequirements[] => {
    const filteredHours = listOfHours.filter((hour) => hour.day === day);
    return filteredHours.sort((a, b) => a.hour - b.hour);
  };

  useEffect(() => {
    updateHours();
  }, []);

  const renderHours = (day:Day) => {
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
          handleUnclaimHour={setModalTimeSlotId}
          handleCancelSubRequest={() => Error('Should not be able to cancel sub requests from this card.')}
          handleCreateSubRequest={setModalTimeSlotId}
          showProgress
        />
      </Grid>
    )));
  };

  return (
    <Grid container spacing={3}>
      {daysOfTheWeek.map((day) => (
        renderHours(day)
      ))}
    </Grid>
  );
};

export default AvailableHoursPage;
