import React, { useContext } from 'react';
import {
  Alert,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  LinearProgress,
  Tooltip,
} from '@material-ui/core';
import { AddBox, Cancel, Schedule } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { HourCardRequirements } from '../types/HourCardRequirements';
import UserContext from '../contexts/UserContext';
import getDayString from '../utilities/dayFormatter';
import getTimeString from '../utilities/timeFormatter';
import DialogContext from '../contexts/DialogContext';

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
  handleCreateSubRequest,
  handleCancelSubRequest,
}: HourCardRequirements) => {
  const { adminParishIds } = useContext(UserContext);
  const { openUnclaimHourDialog, openCreateSubRequestDialog } = useContext(DialogContext);

  const renderSubRequests = () => {
    if (!subRequests) return <></>;

    const getText = (date:string, isClaimed:boolean) => `${date} - ${isClaimed ? 'Claimed' : 'Unclaimed'}`;

    return (
      <>
        {subRequests.map((item) => (
          <Alert severity={item.hasBeenPickedUp ? 'success' : 'info'}>
            {getText(item.dateOfSubstitution, item.hasBeenPickedUp)}
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#cancelRequestModal"
              onClick={() => handleCancelSubRequest(item.subRequestId)}
            >
              Cancel Request
            </button>
          </Alert>
        ))}
      </>
    );
  };

  const renderActionButtons = () => {
    if (!isClaimedByUser) {
      return (
        <Tooltip title="Claim Hour">
          <IconButton
            color="success"
            onClick={() => handleClaimHour(timeSlotId)}
          >
            <AddBox />
          </IconButton>
        </Tooltip>
      );
    }

    return (
      <>
        <Tooltip title="Unclaim Hour">
          <IconButton
            color="error"
            onClick={() => openUnclaimHourDialog()}
          >
            <Cancel />
          </IconButton>
        </Tooltip>
        <Tooltip title="Make Sub Request">
          <IconButton
            color="primary"
            onClick={() => openCreateSubRequestDialog()}
          >
            <Schedule />
          </IconButton>
        </Tooltip>
      </>
    );
  };

  const getProgressColor = (progress:number) => {
    if (progress >= 100) return 'success';
    if (isClaimedByUser) return 'primary';
    return 'error';
  };

  const renderProgress = () => {
    if (!showProgress) return <></>;

    let adorerPercentage = 0.0;
    if (minimumAdorers > 0) {
      adorerPercentage = (adorerCount * 100.0) / minimumAdorers;
    }

    return (
      <>
        <LinearProgress
          variant="determinate"
          value={adorerPercentage}
          color={getProgressColor(adorerPercentage)}
          sx={{
            height: 10,
          }}
        />
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
      <IconButton aria-label="admin settings">
        <MoreVertIcon />
      </IconButton>
    );
  };

  const renderHeadingText = () => `${getDayString(day)} ${getTimeString(hour)}`;

  return (
    <Card elevation={4}>
      <CardHeader
        title={renderHeadingText()}
        subheader={location}
        action={renderEditButton()}
      />
      <CardContent>
        {renderProgress()}
        {renderSubRequests()}
      </CardContent>
      <CardActions disableSpacing>
        {renderActionButtons()}
      </CardActions>
    </Card>
  );
};

export default HourCard;
