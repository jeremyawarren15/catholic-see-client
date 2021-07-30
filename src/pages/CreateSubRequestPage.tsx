import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import appPaths from '../utilities/appPaths';

const CreateSubRequestPage = () => {
  const { id } = useParams<{id?:string}>();

  if (!id) {
    return <Redirect to={appPaths.claimed} />;
  }

  return (
    <h1>
      Testing Create Sub Request
      {' '}
      {id}
    </h1>
  );
};

export default CreateSubRequestPage;
