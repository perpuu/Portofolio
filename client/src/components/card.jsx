import { Link } from "react-router-dom";

export default function card({ data }) {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5dpfXgVQoQ5SoY0r_dARVyoNRsLNnW3dWQ&usqp=CAU"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title" style={{ fontFamily: "Fantasy,cursive" }}>{data.title}</h2>
          <p style={{ fontFamily: "cursive" }}>{data.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" style={{ fontFamily: "Monospace" }}>
              <Link to={`/detail/${data.id}`}>Read More</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
