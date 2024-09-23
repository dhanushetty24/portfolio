import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";

const Home: React.FC = () => {
  return (
    <main className="container">
      <Navbar />
      <Banner />
      <AboutMe />
      <ContactForm />
    </main>
  );
};

export default Home;
