import { useEffect, useState } from 'react';

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  // const fetchUsers = async () => {
  //   const response = await fetch(`${process.env.REACT_GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  //     },
  //   });

  //   const data = await response.json();
  //   console.log(data, 'data');
  // };

  const fetchUsers = async () => {
    const response = await fetch('https://api.github.com/users', {
      headers: {
        Authorization: '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',
      },
    });

    const data = await response.json();
    console.log(data, 'data');
    setUsers(data);
    setLoading(false);
  };

  return <div>User Results</div>;
};

export default UserResults;
