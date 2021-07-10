import React from 'react';
import Accordion from '../../components/Accordion';
import AccordionItem from '../../components/AccordionItem';
import HourCard from '../../components/HourCard';
import { HourCardRequirements } from '../../types/HourCardRequirements';
import daysOfTheWeek from '../../utilities/constants';

interface Props {
  hours:HourCardRequirements[]
}

const AvailableHoursPage = ({
  hours,
}: Props) => {
  const getHoursForDay = (
    listOfHours:HourCardRequirements[],
    day:number,
  ):HourCardRequirements[] => {
    const filteredHours = listOfHours.filter((hour) => hour.day === day);
    return filteredHours.sort((a, b) => a.hour - b.hour);
  };

  const id = 'hoursAccordion';
  return (
    <Accordion id={id}>
      {daysOfTheWeek.map((day) => (
        <AccordionItem headerText={day.value} parentId={id}>
          {getHoursForDay(hours, day.index)?.map((hour) => (
            <HourCard
              key={`${hour.hour} ${hour.day}`}
              hour={hour.hour}
              day={hour.day}
              isAdmin={hour.isAdmin}
              isClaimedByUser={hour.isClaimedByUser}
              location={hour.location}
              numberOfAdorers={hour.numberOfAdorers}
              minimumAdorers={hour.minimumAdorers}
            />
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AvailableHoursPage;
