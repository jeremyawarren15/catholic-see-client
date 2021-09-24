import React, { useContext, useEffect, useState } from 'react'
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  TextField,
  Typography
} from '@material-ui/core'
import { getUserSettings } from '../service/userService';
import UserContext from '../contexts/UserContext';

const SettingsPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [shouldReceiveNewHoursEmails, setShouldReceiveNewHourEmails] = useState(false);
  const [shouldReceiveSubRequestEmails, setShouldReceiveSubRequestEmails] = useState(false);
  const { token } = useContext(UserContext);

  const loadSettings = async () => {
    const { data } = await getUserSettings(token);
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setEmail(data.email);
    setShouldReceiveNewHourEmails(data.shouldReceiveNewHoursEmails);
    setShouldReceiveSubRequestEmails(data.shouldReceiveSubRequestEmails);
  }

  useEffect(() => {
    loadSettings();
  }, [])

  return (
    <Container component="main" maxWidth="lg">
      <Typography variant='h4' sx={{ marginBottom: '20px' }}>
        Settings
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="firstName"
              label="First Name"
              variant="outlined"
              value={firstName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="lastName"
              label="Last Name"
              variant="outlined"
              value={lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="Email Address"
              variant="outlined"
              disabled
              value={email}
            />
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormLabel component="legend">Receive Emails for...</FormLabel>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={shouldReceiveNewHoursEmails}
                  />
                }
                label="New Hours"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={shouldReceiveSubRequestEmails}
                  />
                }
                label="Sub Requests"
              />
            </FormGroup>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button>Save Changes</Button>
        </Grid>
      </form>
    </Container>
  )
}

export default SettingsPage;