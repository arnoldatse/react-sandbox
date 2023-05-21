import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@app/hooks/store";
import { disconnect } from "@app/store/account/accountSlice";
import logo from "assets/pictures/logo.png";
import "./officeLayout.css";

const OfficeLayout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(disconnect());
    navigate("/", { replace: true });
  };
  return (
    <div className="office-page">
      <nav className="office-top-bar">
        <div className="logo"><Link to="/"><img src={logo} alt="Logo" width="20px" /></Link></div>
        <ul>
          <li>
            <button className="btn" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <div className="content-page">
        <Outlet />
      </div>
    </div>
  );
};

export default OfficeLayout;
