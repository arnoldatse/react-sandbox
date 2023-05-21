import { useAppDispatch, useAppSelector } from "@app/hooks/store";
import { useNavigate, useParams } from "react-router-dom";
import Project from "core/office/entities/Project";
import { SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Form, { Inputs, TypeForm } from "./form/form";
import { edit } from "@app/store/projects/projectsSlice";
import { findOneProjectSelector } from "@app/store/projects/projectSelector";

const EditForm = () => {
  const typeForm = TypeForm.edit
  let { projectId } = useParams();
  const project = useAppSelector(findOneProjectSelector(projectId!));
  const [submitionLoading, setSubmitionLoading] = useState(false);
  const [submitionError, setSubmittonError] = useState({
    error: false,
    message: "",
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = ({ title, desc }) => {
    setSubmitionLoading(true);
    dispatch(edit(new Project(projectId!, title, desc)));
    navigate("/office/projects", { replace: true });
  };

  return (
    <>
      {project && (
        <Form
          type={typeForm}
          project={project}
          onSubmit={onSubmit}
          submitionLoading={submitionLoading}
          submitionError={submitionError}
        />
      )}
    </>
  );
};

export default EditForm;
