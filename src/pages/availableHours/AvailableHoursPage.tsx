import React from 'react';
import Accordion from '../../components/Accordion';
import AccordionItem from '../../components/AccordionItem';
import HourCard from '../../components/HourCard';
import { Day } from '../../types/Day';
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

  const renderHours = (day:Day) => {
    const hoursForDay = getHoursForDay(hours, day.index);
    if (hoursForDay.length < 1) {
      return <h4 className="text-muted">No hours</h4>;
    }

    return (hoursForDay?.map((hour) => (
      <HourCard
        key={`${hour.hour} ${hour.day}`}
        hour={hour.hour}
        day={hour.day}
        parishId={hour.parishId}
        isClaimedByUser={hour.isClaimedByUser}
        location={hour.location}
        numberOfAdorers={hour.numberOfAdorers}
        minimumAdorers={hour.minimumAdorers}
        showProgress
      />
    )));
  };

  const id = 'hoursAccordion';
  return (
    <Accordion id={id}>
      {daysOfTheWeek.map((day) => (
        <AccordionItem key={day.index} headerText={day.value} parentId={id}>
          {renderHours(day)}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AvailableHoursPage;
