import React from 'react';
import HourCard from '../components/HourCard';

const ClaimedHoursPage = () => (
  <HourCard
    timeSlotId={111}
    key="111"
    hour={1}
    day={1}
    isClaimedByUser
    location="Sacred Heart Chapel"
    minimumAdorers={2}
    adorerCount={1}
    parishId={1}
    subRequests={['March 4, 2021']}
  />
);

export default ClaimedHoursPage;
