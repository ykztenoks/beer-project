export function Card({ beer }) {
  return (
    <div className="card-group d-flex align-content-start flex-wrap">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{beer.name}</h5>
          <p className="card-text">
            <div>IBU: {beer.ibu}</div>
            <div>{beer.style}</div>
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
