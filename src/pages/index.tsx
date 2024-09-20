import Navbar from "@/components/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <section style={{ textAlign: 'center', padding: '32px' }}>
          <h1>Hey, I'm Dhanush Shetty</h1>
          <p>Node.js Backend Developer with 5+ years of experience in building REST APIs using JavaScript and TypeScript, proficient in React.js, and AWS certified to create scalable cloud-native applications.</p>
        </section>
      </main>
    </>
  );
};

export default Home;
