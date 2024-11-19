import AboutMe from "../components/AboutMe/AboutMe";
import Landing from "../components/Landing/Landing";
import Skills from "../components/Skills/Skills";
import ContactMe from "../components/ContactMe/ContactMe";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Landing />
      <AboutMe aboutPage={false} />
      <Skills />
      <ContactMe contactPage={false} />
      <Footer />
    </>
  );
}
