import React, { useContext } from 'react';
import { HourCardRequirements } from '../types/HourCardRequirements';
import UserContext from '../contexts/UserContext';
import getDayString from '../utilities/dayFormatter';
import getTimeString from '../utilities/timeFormatter';

const HourCard = ({
  day,
  hour,
  location,
  isClaimedByUser,
  adorerCount,
  minimumAdorers,
  parishId,
  subRequests,
  showProgress,
}: HourCardRequirements) => {
  const { adminParishIds } = useContext(UserContext);

  const renderSubRequests = () => {
    if (!subRequests) return <></>;

    return (
      <>
        <h5>Sub Requests</h5>
        <ul className="list-group mt-3">
          {subRequests.map((item) => (
            <li key={item} className="list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
              {item}
              <button className="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#cancelRequestModal">Cancel Request</button>
            </li>
          ))}
        </ul>
      </>
    );
  };

  const renderActionButtons = () => {
    if (!isClaimedByUser) return <button className="btn btn-sm btn-success" type="button">Claim</button>;
    return (
      <>
        <button className="btn btn-sm btn-danger me-2" type="button" data-bs-target="#unclaimHourModal" data-bs-toggle="modal">Unclaim</button>
        <button className="btn btn-sm btn-primary me-2" type="button">Request Sub</button>
      </>
    );
  };

  const renderProgress = () => {
    if (!showProgress) return <></>;

    let adorerPercentage = 0.0;
    if (minimumAdorers > 0) {
      adorerPercentage = (adorerCount * 100.0) / minimumAdorers;
    }

    let progressBarClasses = 'progress-bar bg-success';
    if (adorerPercentage < 100 && isClaimedByUser) {
      progressBarClasses = 'progress-bar progress-bar-striped progress-bar-animated';
    } else if (adorerPercentage < 100 && !isClaimedByUser) {
      progressBarClasses = 'progress-bar progress-bar-striped progress-bar-animated bg-danger';
    }

    return (
      <>
        <div className="progress">
          <div
            className={progressBarClasses}
            role="progressbar"
            style={{ width: `${adorerPercentage}%` }}
            aria-valuenow={adorerPercentage}
            aria-valuemin={0}
            aria-valuemax={minimumAdorers}
          />
        </div>
        <p className="text-muted text-right">
          {adorerCount}
          /
          {minimumAdorers}
        </p>
      </>
    );
  };

  const renderEditButton = () => {
    if (!adminParishIds?.includes(parishId)) return <></>;

    return (
      <a href="google.com" className="btn btn-sm btn-outline-primary">Edit</a>
    );
  };

  const renderHeadingText = () => `${getDayString(day)} ${getTimeString(hour)}`;

  return (
    <div className="col">
      <div className="card mb-3">
        <div className="card-header d-flex align-items-center justify-content-between">
          <div>
            <h5 className="card-title">
              {renderHeadingText()}
            </h5>
            <h6 className="card-subtitle text-muted">
              {location}
            </h6>
          </div>
          {renderEditButton()}
        </div>
        <div className="card-body">
          {renderProgress()}
          {renderSubRequests()}
          <div className="mt-3">
            {renderActionButtons()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourCard;
