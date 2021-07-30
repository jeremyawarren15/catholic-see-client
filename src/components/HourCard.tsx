import React, { useContext } from 'react';
import { Redirect, useHistory } from 'react-router';
import { HourCardRequirements } from '../types/HourCardRequirements';
import UserContext from '../contexts/UserContext';
import getDayString from '../utilities/dayFormatter';
import getTimeString from '../utilities/timeFormatter';
import appPaths from '../utilities/appPaths';

const HourCard = ({
  timeSlotId,
  day,
  hour,
  location,
  isClaimedByUser,
  adorerCount,
  minimumAdorers,
  parishId,
  subRequests,
  showProgress,
  handleClaimHour,
  handleUnclaimHour,
  handleCancelSubRequest,
}: HourCardRequirements) => {
  const { adminParishIds } = useContext(UserContext);
  const history = useHistory();

  const renderSubRequests = () => {
    if (!subRequests) return <></>;

    const getListGroupClasses = (isClaimed:boolean) => {
      if (isClaimed) {
        return 'list-group-item list-group-item-success d-flex justify-content-between align-items-center';
      }
      return 'list-group-item list-group-item-warning d-flex justify-content-between align-items-center';
    };

    const getListButtonClasses = (isClaimed:boolean) => {
      if (isClaimed) {
        return 'btn btn-outline-success btn-sm';
      }
      return 'btn btn-outline-warning btn-sm';
    };

    const getText = (date:string, isClaimed:boolean) => `${date} - ${isClaimed ? 'Claimed' : 'Unclaimed'}`;

    return (
      <>
        <h5>Sub Requests</h5>
        <ul className="list-group mt-3">
          {subRequests.map((item) => (
            <li key={item.subRequestId} className={getListGroupClasses(item.hasBeenPickedUp)}>
              {getText(item.dateOfSubstitution, item.hasBeenPickedUp)}
              <button
                className={getListButtonClasses(item.hasBeenPickedUp)}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#cancelRequestModal"
                onClick={() => handleCancelSubRequest(item.subRequestId)}
              >
                Cancel Request

              </button>
            </li>
          ))}
        </ul>
      </>
    );
  };

  const renderActionButtons = () => {
    if (!isClaimedByUser) {
      return (
        <button
          className="btn btn-sm btn-success"
          type="button"
          onClick={() => handleClaimHour(timeSlotId)}
        >
          Claim
        </button>
      );
    }

    const handleRequestSub = () => {
      history.push(`/createSubRequest/${timeSlotId}`);
    };

    return (
      <>
        <button
          className="btn btn-sm btn-danger me-2"
          type="button"
          data-bs-target="#unclaimHourModal"
          data-bs-toggle="modal"
          onClick={() => handleUnclaimHour(timeSlotId)}
        >
          Unclaim
        </button>
        <button
          className="btn btn-sm btn-primary me-2"
          type="button"
          onClick={() => handleRequestSub()}
        >
          Request Sub
        </button>
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
