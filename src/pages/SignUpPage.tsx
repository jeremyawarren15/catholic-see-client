import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import { registerUser } from '../service/authService';
import { Link, useHistory } from 'react-router-dom';
import { RouterSharp } from '@material-ui/icons';
import appPaths from '../utilities/appPaths';

type FormValues = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string
}

export default function SignUpPage() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm<FormValues>();
  const history = useHistory();


  const handleSubmitForm = handleSubmit(async ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  }) => {
    try {
      await registerUser(
        firstName,
        lastName,
        email,
        password,
        confirmPassword
      );

      // probably should make a new page to push to
      // but the home screen should be okay for now
      history.push('/')
    } catch ({ response: { data } }) {
      if (data.errors?.Email) {
        setError("email", { type: "manual", message: data.errors.Email })
      }
      if (data.errors?.Password) {
        setError("password", { type: "manual", message: data.errors.Password })
      }
      if (data.errors?.ConfirmPassword) {
        setError("confirmPassword", { type: "manual", message: data.errors.ConfirmPassword })
      }
      if (data.length > 0) {
        if (data[0].code === "PasswordRequiresNonAlphanumeric") {
          setError("password", { type: "manual", message: data[0].description })
        }
        else {
          setError("email", { type: "manual", message: data[0].description })
        }
      }
    }
  })


  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmitForm}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("firstName", { required: { value: true, message: "First name is required." } })}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                required
                fullWidth
                id="lastName"
                label="Last Name"
                {...register("lastName", { required: { value: true, message: "Last name is required." } })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={!!errors.email}
                required
                fullWidth
                id="email"
                label="Email Address"
                helperText={errors.email?.message}
                {...register("email", { required: { value: true, message: "Email address is required." } })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                error={!!errors.password}
                helperText={errors.password?.message}
                fullWidth
                {...register("password", { required: { value: true, message: "Password is required." } })}
                label="Password"
                type="password"
                id="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                fullWidth
                {...register("confirmPassword", { required: { value: true, message: "Confirm password is required." } })}
                label="Confirm Password"
                type="password"
                id="confirmPassword"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              Already have an account?&nbsp;
              <Link to={appPaths.login}>
                Sign In
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
