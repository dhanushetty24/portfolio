import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";

const Home: React.FC = () => {
  return (
    <main className="container">
      <Navbar />
      <Banner />
      <AboutMe />
    </main>
  );
};

export default Home;
