import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch"

const Home = () => {
  const {data: blogs, error} = useFetch("http://localhost:8000/blogs")
  return (
    <div className="home">
      {blogs ? (
        <BlogList blogs={blogs} title="All Blogs!" />
      ) : !error ? (
        <div>Loading...</div>
      ) : (
        <div>{error}</div>
      )}
    </div>
  );
};

export default Home;
