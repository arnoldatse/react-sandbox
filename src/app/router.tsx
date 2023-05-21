import { ReactNode } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";

import DefaultLayout from "./layouts/public/default/defaultLayout";
import Home from "./pages/public/home/home";
import OfficeLayout from "./layouts/office/officeLayout";
import Login from "./pages/public/auth/login/login";

import { useAppSelector } from "./hooks/store";
import Projects from "./pages/office/projects/projects";
import AddForm from "./pages/office/projects/form/addForm";
import EditForm from "./pages/office/projects/form/editForm";
import { accountAuthenticatedSelector } from "./store/account/accountSelector";

interface Props {
  children?: ReactNode;
}

export function ProtectedAuthRoute({ children }: Props) {
  const authenticated = useAppSelector(accountAuthenticatedSelector());
  return <>{authenticated ? children : <Navigate to="/" replace />}</>;
}

export function ProtectedGuestRoute({ children }: Props) {
  const unauthenticated = !useAppSelector(accountAuthenticatedSelector());
  return <>{unauthenticated ? children : <Navigate to="/office/projects" replace />}</>;
}

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<DefaultLayout />}>
        <Route path="" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Route>
      <Route
        path="auth"
        element={
          <ProtectedGuestRoute>
            <DefaultLayout />
          </ProtectedGuestRoute>
        }
      >
        <Route path="" element={<Login />} />
      </Route>
      <Route
        path="office"
        element={
          <ProtectedAuthRoute>
            <OfficeLayout />
          </ProtectedAuthRoute>
        }
      >
        <Route path="" element={<Navigate to="/office/projects" replace />} />
        <Route path="projects" element={<Projects />} >
          <Route path="add" element={<AddForm/>}/>
          <Route path="edit/:projectId" element={<EditForm/>}/>
          {/* {<Route path="edit/:userId" lazy={ () => import("./pages/office/projects/form/editForm") }/>} */}
        </Route>
      </Route>
    </Route>
  )
);
