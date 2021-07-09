import React from 'react';
import { HourCardRequirements } from '../types/HourCardRequirements';
import getDayString from '../utilities/dayFormatter';
import getTimeString from '../utilities/timeFormatter';

const HourCard = ({
  day, hour, location, isAdmin, isClaimedByUser, numberOfAdorers, minimumAdorers,
}: HourCardRequirements) => {
  let actionButtons;
  if (isClaimedByUser) {
    actionButtons = (
      <>
        <button className="btn btn-sm btn-danger me-2" type="button">Unclaim</button>
        <button className="btn btn-sm btn-outline-primary me-2" type="button">Request Sub</button>
      </>
    );
  } else {
    actionButtons = <button className="btn btn-sm btn-success" type="button">Claim</button>;
  }

  let adorerPercentage = 0.0;
  if (minimumAdorers > 0) {
    adorerPercentage = (numberOfAdorers * 100.0) / minimumAdorers;
  }

  return (
    <div className="col">
      <div className="card mb-3">
        <div className="card-header d-flex align-items-center justify-content-between">
          <div>
            <h5 className="card-title">
              {getDayString(day)}
              {' '}
              {getTimeString(hour)}
            </h5>
            <h6 className="card-subtitle text-muted">
              {location}
            </h6>
          </div>
          {isAdmin
            && <a href="google.com" className="btn btn-sm btn-outline-primary">Edit</a>}
        </div>
        <div className="card-body">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${adorerPercentage}%` }}
              aria-valuenow={adorerPercentage}
              aria-valuemin={0}
              aria-valuemax={minimumAdorers}
            />
          </div>
          <p className="text-muted text-right">
            {numberOfAdorers}
            /
            {minimumAdorers}
          </p>
          <div className="mt-3">
            {actionButtons}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourCard;
