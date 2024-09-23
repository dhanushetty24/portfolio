import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <main className="container">
      <Navbar />
      <Banner />
      <AboutMe />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Home;
