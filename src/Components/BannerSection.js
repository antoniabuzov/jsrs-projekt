
import BannerImg from "../Components/img/banner-img.jpg"
import "../Components/css/Banner.css"

function BannerSection() {
  return (
    <section className="banner-section" id="banner-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="banner-text">
              <h2 className="mb-3">It's better to live among flowers.</h2>
              <h1 className="mb-3 text-capitalize">Best flower webshop for you.</h1>
              <p className="mb-4">Bring joy and beauty to your loved ones with our stunning flower arrangements. From romantic roses to vibrant sunflowers, we offer a wide selection of fresh and handcrafted bouquets for every occasion. Order now and experience the magic of flowers delivered straight to your door.</p>
              <a href="#" className="btn btn-theme">shop now</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner-img">
              <div className="circular-img">
                <img src={BannerImg} alt="banner img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
