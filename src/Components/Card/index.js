export function Card({ beer }) {
  return (
    <div className="card-group d-flex align-content-start flex-wrap">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{beer.name}</h5>
          <p className="card-text">
            <p>IBU: {beer.ibu}</p>
            <p>{beer.style}</p>
          </p>
          <p className="card-text">
            <small class="text-muted">
              <p>{beer.country}</p>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
