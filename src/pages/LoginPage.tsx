import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import login from '../service/authService';
import appPaths from '../utilities/appPaths';

type FormValues = {
  emailAddress: string,
  password: string
}

const LoginPage = () => {
  const { updateToken, updateAdminParishIds, updateName } = useContext(UserContext);
  const [showLoadingButton, setShowLoadingButton] = useState(false);
  const history = useHistory();

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit = async ({ emailAddress, password }:FormValues) => {
    setShowLoadingButton(true);
    await login(emailAddress, password)
      .then(({ data }) => {
        updateAdminParishIds(data.parishAdminAccessIds);
        updateToken(data.access_Token);
        updateName(data.name);
        history.push(appPaths.claimed);
      }).catch(() => {
        setShowLoadingButton(false);
      });
  };

  const renderSubmitButton = () => {
    if (showLoadingButton) {
      return (
        <button className="btn btn-primary" type="button" disabled>
          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
          Loading...
        </button>
      );
    }

    return (
      <button
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    );
  };

  return (
    <>
      <h2>Login</h2>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)} className="col-md-3" noValidate>
        <div className="mb-3">
          <label htmlFor="emailAddress" className="form-label">Email address</label>
          <input
            type="email"
            className={`form-control ${errors.emailAddress ? 'is-invalid' : ''}`}
            id="emailAddress"
            aria-describedby="emailHelp"
            {...register('emailAddress', { required: 'Please enter an email address.' })}
          />
          {errors.emailAddress && (
            <div className="invalid-feedback">
              {errors.emailAddress.message}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            id="password"
            {...register('password', { required: 'Please enter a password.' })}
          />
          {errors.password && (
            <div className="invalid-feedback">
              {errors.password.message}
            </div>
          )}
        </div>
        {renderSubmitButton()}
      </form>
    </>
  );
};

export default LoginPage;
