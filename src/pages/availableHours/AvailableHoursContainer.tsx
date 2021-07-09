import React from 'react';
import Accordion from '../../components/Accordion';
import { AccordionItem } from '../../components/AccordionItem';
import HourCard from '../../components/HourCard';

export const AvailableHoursContainer = () => {
  const id = 'hoursAccordion';
  return (
    <Accordion id={id}>
      <AccordionItem headerText="Sunday" parentId={id} adorersNeeded={2}>
        <HourCard
          hour={13}
          day="Sunday"
          isAdmin={false}
          isClaimedByUser
          location="Sacred Heart Chapel"
          numberOfAdorers={10}
          minimumAdorers={12}
        />
      </AccordionItem>
      <AccordionItem headerText="Monday" parentId={id} />
      <AccordionItem headerText="Tuesday" parentId={id} />
      <AccordionItem headerText="Wednesday" parentId={id} />
      <AccordionItem headerText="Thursday" parentId={id} />
      <AccordionItem headerText="Friday" parentId={id} />
      <AccordionItem headerText="Saturday" parentId={id} />
    </Accordion>
  );
};

export default AvailableHoursContainer;
