import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <main className="container">
      <Navbar />
      <Banner />
      <AboutMe />
      <Experience />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Home;
