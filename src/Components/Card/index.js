import style from "./style.module.css";

export function Card({ beer }) {
  return (
    <div className={style.beercard}>
      <div className={style.cardgroup}>
        <div className={style.card}>
          <div className={style.cardimg}>
            <img
              className={style.img}
              style={{ width: "100%" }}
              src={`${beer.logo}`}
              // className="card-img-top"
              // style={{ objectFit: "cover" }}
              alt="..."
            />
          </div>
          <div className={style.cardbody}>
            <h5 className={style.cardtitle}>{beer.name}</h5>

            <div className={style.cardtext}>
              <div>IBU: {beer.ibu}</div>
              <div>{beer.style}</div>
            </div>

            <div className={style.cardtext}>
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
