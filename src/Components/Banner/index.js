import { Link } from "react-router-dom";
import img1 from "../../Assets/images/beerwall.jpg";
import img2 from "../../Assets/images/Copos-de-cerveja-brindando-scaled.jpg";
import img3 from "../../Assets/images/Preco-cerveja.jpg";
import style from "./style.module.css";

export function Banner() {
  return (
    <div className={style.banner}>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className={style.img}
              src="https://urbanlife.gr/wp-content/uploads/2017/04/banner-beer-and-cider3-jpg.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
<<<<<<< HEAD
            <Link to="/random-beer">
              <img className={style.img} src={img2} alt="Second slide" />
            </Link>
=======

            <Link to="/random-beer">
              <img className={style.img} src={img2} alt="Second slide" />
            </Link>

>>>>>>> 3aa01f42d7049485fd4c9a2e33955ef86a38ff17
          </div>
          <div className="carousel-item">
            <img className={style.img} src={img3} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only"></span>
        </a>
        <div className={style.carouselControlNext}>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="sr-only"></span>
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </div>
    </div>
  );
}
