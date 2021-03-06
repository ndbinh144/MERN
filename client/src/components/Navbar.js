import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";

const NavBar = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  const RenderList = () => {
    if (state) {
      return (
        <>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/create">Create Post</Link>
          </li>
          <li>
            <button
              className="btn waves-effect waves-light #d32f2f red darken-2"
              onClick={() => {
                localStorage.clear();
                dispatch({
                  type: "CLEAR",
                })
                history.push('/login');
              }}
            >
              LogOut
            </button>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </>
      );
    }
  };
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to={state ? "/" : "/login"} className="brand-logo left">
          Instagram
        </Link>
        <ul id="nav-mobile" className="right">
          <RenderList />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
