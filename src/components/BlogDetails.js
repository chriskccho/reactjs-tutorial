import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/")
    })
  }

  return (
    <div className="blog-details">
      {blog ? (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      ) : !error ? (
        <div>Loading...</div>
      ) : (
        <div>{error}</div>
      )}
    </div>
  );
};

export default BlogDetails;
