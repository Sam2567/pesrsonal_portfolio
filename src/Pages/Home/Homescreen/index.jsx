import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import ProfileSection from "../ProfileSection";

export default function Home() {
  return (
    <>
      <ProfileSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio></MyPortfolio>
    </>
  );
}
