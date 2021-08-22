import { Grid } from '@material-ui/core';
import * as React from 'react';
import SubRequestCard from '../components/SubRequestCard';

const SubRequestsPage = () => {
  console.log('Hey');
  return (
    <Grid container spacing={3} sx={{ marginBottom: '20px' }}>
      <Grid item xs={12} sm={8} md={4}>
        <SubRequestCard
          date={new Date()}
          location="Sacred Heart Chapel"
          subRequestId={1}
          handleClaimSubRequest={() => console.log("Hey")}
        />
      </Grid>
    </Grid>
  );
};

export default SubRequestsPage;
