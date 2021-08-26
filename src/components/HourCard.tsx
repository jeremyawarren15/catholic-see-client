import React, { useContext, useState } from 'react';
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  LinearProgress,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { AddBox, Cancel, Schedule } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { HourCardRequirements } from '../types/HourCardRequirements';
import UserContext from '../contexts/UserContext';
import getDayString from '../utilities/dayFormatter';
import { getTimeString } from '../utilities/timeFormatter';

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
  showRequests,
  showProgress,
  handleClaimHour,
  handleUnclaimHour,
  handleCreateSubRequest,
  handleCancelSubRequest,
}: HourCardRequirements) => {
  const { adminParishIds } = useContext(UserContext);
  const [isRaised, setIsRaised] = useState(false);

  const renderSubRequests = () => {
    if (!showRequests) return <></>;
    if (!subRequests || subRequests.length < 1) {
      return <></>
    }

    const getText = (date: string, isClaimed: boolean) => `${date} - ${isClaimed ? 'Claimed' : 'Unclaimed'}`;

    return (
      <>
        {subRequests.map((item) => (
          <Alert
            severity={item.hasBeenPickedUp ? 'success' : 'info'}
            action={(
              <Button
                color="inherit"
                size="small"
                onClick={() => handleCancelSubRequest(item.subRequestId)}
              >
                Cancel Request
              </Button>
            )}
          >
            {getText(item.dateOfSubstitution, item.hasBeenPickedUp)}
          </Alert>
        ))}
      </>
    );
  };

  const renderActionButtons = () => {
    if (!isClaimedByUser) {
      return (
        <Button
          color="success"
          size="small"
          onClick={() => handleClaimHour(timeSlotId)}
        >
          Claim
        </Button>
      );
    }

    return (
      <>
        <Button
          color='error'
          size='small'
          onClick={() => handleUnclaimHour(timeSlotId)}
        >
          Unclaim
        </Button>
        <Button
          color="primary"
          size='small'
          onClick={() => handleCreateSubRequest(timeSlotId, day)}
        >
          Request Sub
        </Button>
      </>
    );
  };

  const getProgressColor = (progress: number) => {
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
      <Tooltip title="Edit Hour">
        <IconButton aria-label="admin settings">
          <MoreVertIcon />
        </IconButton>
      </Tooltip>
    );
  };

  const renderHeadingText = () => `${getDayString(day)} ${getTimeString(hour)}`;

  const handleMouseEnter = () => {
    setIsRaised(true)
  }

  const handleMouseLeave = () => {
    setIsRaised(false)
  }

  return (
    <Card
      raised={isRaised}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
