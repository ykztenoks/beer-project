import img1 from "../../Assets/images/beerwall.jpg";
import img2 from "../../Assets/images/Copos-de-cerveja-brindando-scaled.jpg";
import img3 from "../../Assets/images/Preco-cerveja.jpg";
export function Banner() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-50" src={img1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-50" src={img2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-50" src={img3} alt="Third slide" />
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
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
