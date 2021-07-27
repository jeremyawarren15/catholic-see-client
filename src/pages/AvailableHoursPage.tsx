import React, { useContext, useEffect, useState } from 'react';
import Accordion from '../components/Accordion';
import AccordionItem from '../components/AccordionItem';
import HourCard from '../components/HourCard';
import UnclaimHourModal from '../components/modals/UnclaimHourModal';
import UserContext from '../contexts/UserContext';
import { claimHour, getHours, unclaimHour } from '../service/hoursService';
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

  const claim = async (timeSlotId:number) => {
    await claimHour(token, timeSlotId);
    updateHours();
  };

  const unclaim = async (timeSlotId:number) => {
    await unclaimHour(token, timeSlotId);
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
    if (hoursForDay.length < 1) {
      return <h4 className="text-muted">No hours</h4>;
    }

    return (hoursForDay?.map((hour) => (
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
        claim={claim}
        setModalTimeSlotId={setModalTimeSlotId}
        showProgress
      />
    )));
  };

  const id = 'hoursAccordion';
  return (
    <>
      <Accordion id={id}>
        {daysOfTheWeek.map((day) => (
          <AccordionItem key={day.index} headerText={day.value} parentId={id}>
            {renderHours(day)}
          </AccordionItem>
        ))}
      </Accordion>
      <UnclaimHourModal timeSlotId={modalTimeSlotId} unclaim={unclaim} />
    </>
  );
};

export default AvailableHoursPage;
