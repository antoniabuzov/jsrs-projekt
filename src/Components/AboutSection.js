import Video from "../Components/video/Video.mp4"
import "./css/About.css"

function AboutSection() {
  return (
    <section className="about-section box">
      <div className="container">
        <div className="row">
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="inner-column">
              <div className="sec-title">
                <span className="title">About Us</span>
                <h2>Our Passion for Flowers</h2>
              </div>
              <div className="text">
                At our flower shop, we're passionate about creating beautiful floral arrangements that bring joy to our
                customers' lives. Whether you're celebrating a special occasion or simply want to brighten up your day,
                our team of experienced florists is dedicated to crafting the perfect bouquet for you. We source only
                the freshest, highest quality flowers and use our creativity and expertise to design arrangements that
                are both stunning and unique. From classic roses to exotic orchids, we have something for every
                occasion. Let us help you express your love, gratitude, or appreciation with the gift of flowers.
              </div>
              <button className="btn-theme btn">Contact us</button>
            </div>
          </div>

          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column ab">
              <video autoPlay loop muted>
                <source src={Video}/>
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
