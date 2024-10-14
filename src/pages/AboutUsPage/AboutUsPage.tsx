import "./about.scss";
import OurTeam from "./components/OurTeam";
import Provides from "./components/Provides";
import WelcomeAbout from "./components/WelcomeAbout";
export default function AboutUsPage() {
  return (
    <section className="container about">
      <WelcomeAbout />
      <Provides />
      <OurTeam />
    </section>
  );
}
