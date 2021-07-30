import React, { useEffect, useState, useContext } from 'react';
import HourCard from '../components/HourCard';
import CancelRequestModal from '../components/modals/CancelRequestModal';
import UnclaimHourModal from '../components/modals/UnclaimHourModal';
import CreateRequestModal from '../components/modals/CreateRequestModal';
import UserContext from '../contexts/UserContext';
import { getClaimedHours, unclaimHour } from '../service/hoursService';
import { HourCardRequirements } from '../types/HourCardRequirements';

const ClaimedHoursPage = () => {
  const [hours, setHours] = useState<HourCardRequirements[]>([]);
  const [modalTimeSlotId, setModalTimeSlotId] = useState(0);
  const [modalSubRequestId, setModalSubRequestId] = useState(0);
  const { token } = useContext(UserContext);

  const updateHours = () => {
    getClaimedHours(token).then(({ data }) => {
      setHours(data);
    });
  };

  useEffect(() => {
    updateHours();
  }, []);

  const unclaim = () => {
    unclaimHour(token, modalTimeSlotId).then(() => {
      updateHours();
    });
  };

  const handleCancelSubRequest = (subRequestId:number) => {
    setModalSubRequestId(subRequestId);
  };

  const handleCancelRequestModal = (subRequestId:number) => {
    // ajax call to cancel request
    updateHours();
  };

  return (
    <>
      {hours.map((hour) => (
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
          handleUnclaimHour={setModalTimeSlotId}
          handleClaimHour={() => Error('Should not be able to claim on this page')}
          handleCancelSubRequest={handleCancelSubRequest}
        />
      ))}
      <UnclaimHourModal
        timeSlotId={modalTimeSlotId}
        unclaim={unclaim}
      />
      <CancelRequestModal
        subRequestId={modalSubRequestId}
        handleCancelRequest={handleCancelRequestModal}
      />
      <CreateRequestModal />
    </>
  );
};

export default ClaimedHoursPage;
