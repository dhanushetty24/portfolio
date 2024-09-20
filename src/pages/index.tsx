import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutMe />
    </>
  );
};

export default Home;
