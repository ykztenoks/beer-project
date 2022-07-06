export function Card({ beer }) {
  return (
    <div
      className="card-group d-flex align-content-start flex-wrap"
      style={{ width: "400px" }}
    >
      <div className="card">
        <img
          src={`${beer.logo}`}
          className="card-img-top"
          style={{ height: "400px" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{beer.name}</h5>
          <p className="card-text">
            <span>IBU: {beer.ibu}</span>
            <span>{beer.style}</span>
          </p>
          <div className="card-text">
            <small className="text-muted">
              <span>{beer.country}</span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
