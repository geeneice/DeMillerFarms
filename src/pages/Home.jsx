import PartnersCarousel from "../components/PartnerCarousel";
import CarouselCard from "../components/Carousel";
import Footer from "../components/Footer";
import GlobalImpact from "../components/GlobalImpact";
import Header from "../components/Header";
import footerimg from "../assets/footer-art.png";
import Testimonial from "../components/Testimonial";

const Home = () => {
  const logos = [
    "./saliet.png",
    "./wilmar.png",
    "./pure.png",
    "./impeerial.png",
  ];

  return (
    <>
      <Header />
      <CarouselCard />
      <GlobalImpact />

      <div className=" mt-[-46px] relative ">
        <div>
          <PartnersCarousel logos={logos} />
        </div>

        <div className="  bg-[length:200px] bg-repeat">
          <img
            src={footerimg}
            alt=""
            className="absolute -bottom-32 right-0 z-20 w-[20%] "
          />
        </div>
      </div>
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
