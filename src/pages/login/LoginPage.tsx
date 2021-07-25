import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import login from '../../service/authService';
import UserContext from '../../UserContext';
import appPaths from '../../utilities/appPaths';

type FormValues = {
  emailAddress: string,
  password: string
}

const LoginPage = () => {
  const { updateToken, updateAdminParishIds, updateName } = useContext(UserContext);
  const history = useHistory();

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit = async ({ emailAddress, password }:FormValues) => {
    await login(emailAddress, password)
      .then(({ data }) => {
        updateAdminParishIds(data.parishAdminAccessIds);
        updateToken(data.access_Token);
        updateName(data.name);
        history.push(appPaths.claimed);
      });
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
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default LoginPage;
