import React from "react";
import PropTypes from "prop-types";

// components
import UserInfo from "../UserInfo/UserInfo";
import UserRepos from "../UserRepos";
import Pagination from "../Pagination";

import "./styles.css";

const User = ({
  user,
  repos,
  perPage,
  currentPage,
  fetchReposPerPage,
  loadingUserInfo,
  loadingUserRepos,
}) => {
  const {
    name,
    login,
    avatar_url,
    html_url,
    followers,
    following,
    public_repos,
  } = user;

  return (
    <div className="app-user">
      <div className="app-user__info">
        <UserInfo
          name={name}
          login={login}
          avatar_url={avatar_url}
          html_url={html_url}
          followers={followers}
          following={following}
          loadinState={loadingUserInfo}
        />
      </div>

      <div className="app-user__content">
        <UserRepos
          repos={repos}
          public_repos={public_repos}
          loadinState={loadingUserRepos}
        />
        <Pagination
          currentPage={currentPage}
          perPage={perPage}
          public_repos={public_repos}
          fetchReposPerPage={fetchReposPerPage}
        />
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.any,
  repos: PropTypes.shape({
    data: PropTypes.array,
  }),
  perPage: PropTypes.number,
  currentPage: PropTypes.number,
  fetchReposPerPage: PropTypes.func,
  loadingUserInfo: PropTypes.bool,
  loadingUserRepos: PropTypes.bool,
};

export default User;
