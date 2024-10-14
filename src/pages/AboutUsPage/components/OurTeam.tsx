import team1 from "/assets/about/about-6.png";
import team2 from "/assets/about/about-8.png";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
export default function OurTeam() {
  return (
    <div className="row team">
      <h2>Our Team</h2>
      <div className="col-12 col-lg-4 content">
        <h1>Meet Our Expert Team</h1>
        <p>
          Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa
          dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
          faucibus finibus.
        </p>
        <p>
          Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa
          dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
          faucibus finibus.
        </p>
        <button>View All Members</button>
      </div>
      <div className="col-12 col-lg-8 images">
        <div className="row">
          <div className="image col-12 col-md-6">
            <img src={team1} alt="notFound" />
            <div className="boxes">
              <h4>H. Merinda</h4>
              <span>CEO & Co-Founder</span>
              <ul>
                <li>
                  <Facebook fill="#333345" stroke="12px" />
                </li>
                <li>
                  <Twitter fill="#333345" stroke="12px" />
                </li>
                <li>
                  <Instagram />
                </li>
                <li>
                  <Youtube />
                </li>
              </ul>
            </div>
          </div>
          <div className="image col-12 col-md-6">
            <img src={team2} alt="notFound" />
            <div className="boxes">
              <h4>Dilan Specter</h4>
              <span>Head Engineer</span>
              <ul>
                <li>
                  <Facebook fill="#333345" stroke="12px" />
                </li>
                <li>
                  <Twitter fill="#333345" stroke="12px" />
                </li>
                <li>
                  <Instagram />
                </li>
                <li>
                  <Youtube />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
