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
            <img
              className={style.img}
              src="https://i.pinimg.com/originals/27/4e/92/274e92c65be7513f12ad52e9fdd5be2a.jpg"
              alt="Second slide"
            />
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
