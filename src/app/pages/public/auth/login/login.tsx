import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "app/hooks/store";
import { authenticate } from "app/store/account/accountSlice";
import LoginService from "./LoginService";
import "./login.css";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  login: string;
  password: string;
}

const Login = () => {
  const loginService = new LoginService();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>();
  const [submititonLoading, setSubmititonLoading] = useState(false);
  const [submititonError, setSubmititonError] = useState({
    error: false,
    message: "",
  });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = ({login, password}) => {
    setSubmititonLoading(true)
    loginService.execute(login, password, false).then(({ user }) => {
      dispatch(authenticate({ username: user.username, token: user.token }));
      navigate("/office/users", { replace: true });
    }).catch((e: Error)=>{
      setSubmititonError({error: true, message: e.message})
    }).finally(()=> setSubmititonLoading(false));
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Authentication</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {submititonError.error && (
            <div className="form-error-message">{submititonError.message}</div>
          )}
          <div className="field">
            <label htmlFor="sign-in-login">Login</label>
            <input
              id="sign-in-login"
              className="form-control full-width"
              {...register("login", { required: true })}
              type="text"
            />
            {errors.login && (
              <div className="field-error">Login required</div>
            )}
          </div>
          <div className="field">
            <label htmlFor="sign-in-password">Password</label>
            <input
              className="form-control full-width"
              id="sign-in-password"
              {...register("password", { required: true })}
              type="password"
            />
            {errors.password && (
              <div className="field-error">Password required</div>
            )}
          </div>
          <div className="action">
            <button className="btn full-width" type="submit" disabled={!isValid || submititonLoading}>
              { submititonLoading ? 'Loading...' : 'Connexion'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
