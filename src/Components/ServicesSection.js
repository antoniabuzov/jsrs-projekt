
import Service from "./Service";


function ServicesSection() {
    const services = [
      {
        title: "Custom Flowers",
        description: "We specialize in creating personalized flower arrangements for any occasion, from birthdays to weddings. Our experienced florists work with you to design the perfect bouquet.",
      },
      {
        title: "Same-Day Delivery",
        description: "Need flowers delivered quickly? No problem! We offer same-day delivery for orders placed before our cutoff time, ensuring your flowers arrive fresh and on time.",
      },
      {
        title: "Wedding and Event Services",
        description: "From stunning centerpieces to bridal bouquets, we offer a full range of wedding and event flower services. Our team works closely with you to bring your vision to life and create a beautiful and memorable experience.",
      },
      {
        title: "Corporate Accounts",
        description: "We offer corporate accounts for businesses that want to regularly send flowers to their clients or employees. Our team can set up a schedule and take care of everything for you.",
      },
      {
        title: "Funeral Services",
        description: "We understand the importance of paying tribute to loved ones who have passed. Our funeral services include sympathy flowers, casket sprays, and more.",
      },
      {
        title: "Holiday Decorations",
        description: "Get into the holiday spirit with our festive holiday decorations. From wreaths to Christmas trees, we have everything you need to add some cheer to your home or office.",
      }
    ];
  
    return (
      <section className="section-services box">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-8">
              <div className="header-section">
                <h2 className="title">Our <span>Services</span></h2>
                <p className="description">At our flower shop, we pride ourselves on offering personalized services that cater to your unique needs and preferences, ensuring your complete satisfaction every time.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <Service
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default ServicesSection;