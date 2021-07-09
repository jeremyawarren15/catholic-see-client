import React from 'react';
import Accordion from '../../components/Accordion';
import AccordionItem from '../../components/AccordionItem';
import HourCard from '../../components/HourCard';
import { HourCardRequirements } from '../../types/HourCardRequirements';

interface Props {
  sunday?: HourCardRequirements[],
  monday?: HourCardRequirements[],
  tuesday?: HourCardRequirements[],
  wednesday?: HourCardRequirements[],
  thursday?: HourCardRequirements[],
  friday?: HourCardRequirements[],
  saturday?: HourCardRequirements[],
}

const AvailableHoursPage = ({
  sunday, monday, tuesday, wednesday, thursday, friday, saturday,
}: Props) => {
  console.log(sunday);
  const id = 'hoursAccordion';
  return (
    <Accordion id={id}>
      <AccordionItem headerText="Sunday" parentId={id} adorersNeeded={2}>
        {sunday?.map((hour) => (
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
      <AccordionItem headerText="Monday" parentId={id}>
        {monday?.map((hour) => (
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
      <AccordionItem headerText="Tuesday" parentId={id}>
        {tuesday?.map((hour) => (
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
      <AccordionItem headerText="Wednesday" parentId={id}>
        {wednesday?.map((hour) => (
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
      <AccordionItem headerText="Thursday" parentId={id}>
        {thursday?.map((hour) => (
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
      <AccordionItem headerText="Friday" parentId={id}>
        {friday?.map((hour) => (
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
      <AccordionItem headerText="Saturday" parentId={id}>
        {saturday?.map((hour) => (
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
    </Accordion>
  );
};

export default AvailableHoursPage;
