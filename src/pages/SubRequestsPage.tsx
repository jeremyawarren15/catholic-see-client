import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import PickUpSubRequestDialog from '../components/dialogs/PickUpSubRequestDialog';
import SubRequestCard from '../components/SubRequestCard';
import UserContext from '../contexts/UserContext';
import { getSubRequests, pickUpSubRequest } from '../service/hoursService';
import { SubRequestCardRequirements } from '../types/SubRequestCardRequirements';

const SubRequestsPage = () => {
  const { token } = useContext(UserContext)
  const [subRequests, setSubRequests] = useState<SubRequestCardRequirements[]>()
  const [pickUpSubRequestDialogOpen, setPickUpSubRequestDialogOpen] = useState(false);
  const [subRequestId, setSubRequestId] = useState(0);

  const updateSubRequests = async () => {
    const { data } = await getSubRequests(token);
    setSubRequests(data);
  };

  useEffect(() => {
    updateSubRequests()
  }, [])

  const handlePickUpSubRequest = (chosenSubRequestId: number) => {
    setSubRequestId(chosenSubRequestId);
    setPickUpSubRequestDialogOpen(true);
  }

  const handleConfirmPickUpSubRequest = async () => {
    setPickUpSubRequestDialogOpen(false);
    await pickUpSubRequest(token, subRequestId);
    setSubRequestId(0);
    updateSubRequests();
  }

  return (
    <>
      <Grid container spacing={3} sx={{ marginBottom: '20px' }}>
        {subRequests?.map((subRequest) => (
          <Grid item xs={12} sm={8} md={4}>
            <SubRequestCard
              dateOfSubstitution={new Date(subRequest.dateOfSubstitution)}
              timeSlotHour={subRequest.timeSlotHour}
              location={subRequest.location}
              subRequestId={subRequest.subRequestId}
              handlePickUpSubRequest={handlePickUpSubRequest}
            />
          </Grid>
        ))}
      </Grid>
      <PickUpSubRequestDialog
        open={pickUpSubRequestDialogOpen}
        handleConfirmPickUpSubRequest={handleConfirmPickUpSubRequest}
        handleClose={() => setPickUpSubRequestDialogOpen(false)}
      />
    </>
  );
};

export default SubRequestsPage;
