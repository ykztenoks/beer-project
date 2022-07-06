import style from "./style.module.css";

export function Card({ beer }) {
  return (
    <div className={style.beercard}>
      <div className="card-group">
        <div className="card">
          <img
            src={`${beer.logo}`}
            className="card-img-top"
            style={{ height: "auto" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{beer.name}</h5>

            <div className="card-text">
              <div>IBU: {beer.ibu}</div>
              <div>{beer.style}</div>
            </div>

            <div className="card-text">
              <small className="text-muted">
                <span>{beer.country}</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
