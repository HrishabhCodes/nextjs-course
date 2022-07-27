import User from "../components/user";

const UserList = ({ users }) => {
  return (
    <>
      <h1>List of Users</h1>
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </>
  );
};

export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
