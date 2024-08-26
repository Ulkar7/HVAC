import About from "./components/about";
import ContactUs from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Reviews from "./components/reviews";
import { Services } from "./components/services";
import Slide from "./components/slider";
import Trust from "./components/trust";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Slide />
        <Services />
        <About />
        <Reviews />
        <Trust />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
};

export default App;
