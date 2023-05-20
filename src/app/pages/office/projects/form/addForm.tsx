import { useAppDispatch } from "@app/hooks/store";
import { useNavigate } from "react-router-dom";
import Project from "core/office/entities/Project";
import { v4 as uuidv4 } from "uuid";
import { SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Form, { Inputs } from "./form/form";
import { add } from "@app/store/projects/projectsSlice";

const AddForm = () => {
  const project = new Project(uuidv4(), "", "");
  const [submitionLoading, setSubmitionLoading] = useState(false);
  const [submitionError, setSubmittonError] = useState({
    error: false,
    message: "",
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = ({ title, desc }) => {
    setSubmitionLoading(true);
    dispatch(add(new Project(uuidv4(), title, desc)));
    navigate("/office/projects", { replace: true });
  };

  return (
    <Form
      project={project}
      onSubmit={onSubmit}
      submitionLoading={submitionLoading}
      submitionError={submitionError}
    />
  );
};

export default AddForm;
