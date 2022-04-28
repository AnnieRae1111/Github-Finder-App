import { useContext } from 'react';
import Spin from '../layout/Spin';
import UserItem from './UserItem';
import GitHubContext from '../../context/github/GithubContext';

const UserResults = () => {
  const { users, loading } = useContext(GitHubContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spin />;
  }
};

export default UserResults;
