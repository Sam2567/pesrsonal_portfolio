import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import ProfileSection from "../ProfileSection";
import Testimonial from "../Testimonials";

export default function Home() {
  return (
    <>
      <ProfileSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio></MyPortfolio>
      <Testimonial></Testimonial>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </>
  );
}
