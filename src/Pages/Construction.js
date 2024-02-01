import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeadingSecondary from "../Components/SecondaryHeading";
import { MiniTheatreImages } from "../PortfolioImages";
// import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { motion } from "framer-motion";
import WhatsAppButton from "../Components/Whatsapp";

const words = ["Projects", "Coming", "Shortly!", ""];

const Construction = () => {
  // const [lightbox, setLightbox] = useState({
  //   isOpen: false,
  //   photoIndex: 0,
  // });

  // useEffect(() => {
  //   // Preload the first image
  //   const img = new Image();
  //   img.src = MiniTheatreImages[0].url;
  // }, []);

  // const openLightbox = (index) => {
  //   setLightbox({
  //     isOpen: true,
  //     photoIndex: index,
  //   });
  // };

  // const closeLightbox = () => {
  //   setLightbox({
  //     isOpen: false,
  //     photoIndex: 0,
  //   });
  // };

  return (
    <section>
      <section className="w-full banner-small">
        <Navbar />
        <div className="max-w-6xl mx-auto text-center text-white text-3xl md:text-6xl font-bold mt-20 tracking-wide">
          <h2>G Cube Studios Projects</h2>
        </div>
      </section>
      <section className="container max-w-6xl mt-12 mx-auto px-2 md:px-4 lg:px-8 py-8  md:py-12 lg:py-16">
        <HeadingSecondary words={words} />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:my-16 my-8 gap-3 md:gap-8">
          {MiniTheatreImages.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden group cursor-pointer rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              onClick={() => openLightbox(index)}
            >
              <img
                alt={project.name}
                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                src={project.url}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 transition-opacity duration-300 group-hover:opacity-0"></div>
            </motion.div>
          ))}
        </div> */}
      </section>
      {/* {lightbox.isOpen && (
        <Lightbox
          mainSrc={MiniTheatreImages[lightbox.photoIndex].url}
          nextSrc={
            MiniTheatreImages[
              (lightbox.photoIndex + 1) % MiniTheatreImages.length
            ].url
          }
          prevSrc={
            MiniTheatreImages[
              (lightbox.photoIndex + MiniTheatreImages.length - 1) %
                MiniTheatreImages.length
            ].url
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setLightbox({
              ...lightbox,
              photoIndex:
                (lightbox.photoIndex + MiniTheatreImages.length - 1) %
                MiniTheatreImages.length,
            })
          }
          onMoveNextRequest={() =>
            setLightbox({
              ...lightbox,
              photoIndex: (lightbox.photoIndex + 1) % MiniTheatreImages.length,
            })
          }
        />
      )} */}
      <Footer />
      <WhatsAppButton />
    </section>
  );
};

export default Construction;
