import { Link } from 'react-router-dom';
import { useContext } from 'react';
import GitHubContext from '../../context/github/GithubContext';

const UserItem = ({ user }) => {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar"></div>
          <div className="profile-photo">
            <img
              className="rounded-full shadow w-14 h-14"
              src={user.avatar_url}
              alt="profile"
            />
          </div>
        </div>
        <div>
          <h2 className="card-title">{user.login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`users/${user.login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
