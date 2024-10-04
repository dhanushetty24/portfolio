import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

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
