import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>NextJs Pre-rendering</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <br />
      <Link href="/products">
        <a>Products</a>
      </Link>
    </>
  );
};

export default Home;
