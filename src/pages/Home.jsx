import PartnersCarousel from "../components/PartnerCarousel";
import CarouselCard from "../components/Carousel";
import Footer from "../components/Footer";
import GlobalImpact from "../components/GlobalImpact";
import SalesCounter from "../components/Counter";
import Header from "../components/Header";
import footerimg from "../assets/footer-art.png";

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
            className="absolute -bottom-56 right-0 z-20 w-[20%] "
          />
          <div className=" px-8 flex max-sm:flex-col md:flex-row justify-between gap-6 py-20">
            <div className="bg-white duration-1000 w-full max-w-[480px] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -left-10 bg-[rgb(254,161,26)] w-40 h-40 rounded-full blur-3xl opacity-30"></div>

              <h1 className="text-[rgb(96,62,60)] font-bold text-[24px] leading-loose relative z-10">
                <span className="text-[32px] text-[rgb(254,161,26)]">“</span>
                These
                <span className="text-[rgb(254,161,26)]">
                  {" "}
                  classic peanuts
                </span>{" "}
                are the ultimate snack! Roasted to perfection with just the
                right amount of salt. Whether I’m on the go or relaxing at home,
                they’re always by my side
                <span className="text-[32px] text-[rgb(254,161,26)]">”</span>
              </h1>

              <div className="mt-6 flex items-center justify-end relative z-10">
                <div className="bg-[rgb(254,161,26)] text-white font-medium text-[18px] px-4 py-2 rounded-full shadow-md">
                  - Matthew O.
                </div>
              </div>
            </div>

            <div className="bg-white duration-1000 w-full max-w-[480px] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute -bottom-5 left-36 bg-[rgb(254,161,26)] w-40 h-40 rounded-full blur-3xl opacity-30"></div>

              <h1 className="text-[rgb(96,62,60)] font-bold text-[24px] leading-loose relative z-10">
                <span className="text-[32px] text-[rgb(254,161,26)]">“</span>
                <span className=" text-[rgb(254,161,26)]">
                  Classic popcorn
                </span>{" "}
                is a game-changer! Every bite is perfectly crunchy and bursting
                with flavor. It's my go-to snack for movie nights and lazy
                afternoons. I honestly can't get enough!
                <span className="text-[32px] text-[rgb(254,161,26)]">”</span>
              </h1>

              <div className="mt-6 flex items-center justify-end relative z-10">
                <div className="bg-[rgb(254,161,26)] text-white font-medium text-[18px] px-4 py-2 rounded-full shadow-md">
                  - Michael D.
                </div>
              </div>
            </div>

            <div className="bg-white duration-1000 w-full max-w-[480px] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 bg-[rgb(254,161,26)] w-40 h-40 rounded-full blur-3xl opacity-30"></div>

              <h1 className="text-[rgb(96,62,60)] font-bold text-[24px] leading-loose relative z-10">
                <span className="text-[32px] text-[rgb(254,161,26)]">“</span>
                I’ve tried a lot of snacks, but this{" "}
                <span className="text-[rgb(254,161,26)]">
                  classic chinchin{" "}
                </span>{" "}
                is on another level! The perfect balance of crunchiness and
                sweetness. It’s so good, I find myself reaching for another pack
                every single time!
                <span className="text-[32px] text-[rgb(254,161,26)]">”</span>
              </h1>

              <div className="mt-6 flex items-center justify-end relative z-10">
                <div className="bg-[rgb(254,161,26)] text-white font-medium text-[18px] px-4 py-2 rounded-full shadow-md">
                  - Sarah J
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
