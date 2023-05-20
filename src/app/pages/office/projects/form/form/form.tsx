import "./form.css";
import { SubmitHandler, useForm } from "react-hook-form";
import Project from "core/office/entities/Project";
import { Link } from "react-router-dom";

export interface Inputs {
  title: string;
  desc: string;
}

interface propsInterface{
  project: Project
  onSubmit: SubmitHandler<Inputs>;
  submitionLoading: boolean
  submitionError: {
    error: boolean,
    message: string,
  }
}

const Form = ({project, onSubmit, submitionLoading, submitionError}: propsInterface,) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    defaultValues: {title: project.title, desc: project.desc}
  });
  return (
    <div>
      <Link to="../" className="link">
        Annuler
      </Link>
      <form className="project-form" onSubmit={handleSubmit(onSubmit)}>
        {submitionError.error && (
          <div className="form-error-message">{submitionError.message}</div>
        )}
        <div className="field">
          <label htmlFor="sign-in-login">Title</label>
          <input
            id="sign-in-login"
            className="form-control full-width"
            {...register("title", { required: true })}
            type="text"
          />
          {errors.title && <div className="field-error">Title required</div>}
        </div>
        <div className="field">
          <label htmlFor="sign-in-password">Description</label>
          <textarea
            className="form-control full-width"
            id="sign-in-password"
            {...register("desc")}
          />
        </div>
        <div className="action">
          <button
            className="btn full-width"
            type="submit"
            disabled={!isValid || submitionLoading}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
