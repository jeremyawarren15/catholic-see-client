import { Grid } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import SubRequestCard from '../components/SubRequestCard';
import UserContext from '../contexts/UserContext';
import { getSubRequests } from '../service/hoursService';
import { SubRequestCardRequirements } from '../types/SubRequestCardRequirements';

const SubRequestsPage = () => {
  const { token } = useContext(UserContext)
  const [subRequests, setSubRequests] = useState<SubRequestCardRequirements[]>()

  const updateSubRequests = async () => {
    const { data } = await getSubRequests(token);
    setSubRequests(data);
  };

  useEffect(() => {
    updateSubRequests()
  }, [])

  return (
    <Grid container spacing={3} sx={{ marginBottom: '20px' }}>
      {subRequests?.map((subRequest) => (
        <Grid item xs={12} sm={6} md={3}>
          <SubRequestCard
            dateOfSubstitution={new Date(subRequest.dateOfSubstitution)}
            timeSlotHour={subRequest.timeSlotHour}
            location={subRequest.location}
            subRequestId={subRequest.subRequestId}
            handleClaimSubRequest={() => { }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SubRequestsPage;
