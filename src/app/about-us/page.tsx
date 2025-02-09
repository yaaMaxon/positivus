import Preview from "../components/Preview";
import ImpactInNumbers from "../components/ImpactInNumbers";
import OurJourney from "../components/OurJourney";
import CoreValue from "../components/CoreValues";
import AboutUsQuote from "../components/AboutUsQuote";
import AwardsRecognition from "../components/AwardsRecognition";
import BlurbBox from "../components/BlurbBox";
import aboutUsPreview from "@assets/img/aboutUsPreview.webp";
import JoinOurTeam from "@assets/icons/joinOurTeam.svg";

const AboutUs = () => {
  return (
    <main className="px-5 lg:px-[100px]">
      <div className="mt-10 lg:mt-[80px] mb-[60px] lg:mb-[140px]">
        <Preview
          title="Together for Success"
          description="At Positivus, we help businesses grow by combining creativity, innovation, and data-driven strategies. Together, we build a future of shared success."
          img={aboutUsPreview}
        />
      </div>
      <div className="mb-[60px] lg:mb-[140px]">
        <ImpactInNumbers />
      </div>
      <div className="mb-[60px] lg:mb-[140px]">
        <OurJourney />
      </div>
      <div
        id="core-values"
        className="mb-[70px] lg:mb-[180px] scroll-mt-[78px] lg:scroll-mt-[100px] xl:scroll-mt-[125px]"
      >
        <CoreValue />
      </div>
      <div className="mb-[50px] lg:mb-[140px]">
        <AboutUsQuote />
      </div>
      <div
        id="awards"
        className="mb-[60px] lg:mb-[140px] scroll-mt-[78px] lg:scroll-mt-[100px] xl:scroll-mt-[125px]"
      >
        <AwardsRecognition />
      </div>
      <div className="mb-[60px] lg:mb-[140px]">
        <BlurbBox
          subTitle="Join Our Team"
          description="At Positivus, we thrive on innovation and collaboration. We're always looking for passionate individuals to join our team and help businesses grow. Ready to make an impact?"
          textBtn="Explore Careers"
          furtherIcon={<JoinOurTeam />}
          className="bg-green shadow-[0px_5px_0px_0px_#191A23]"
          path="/#team"
        />
      </div>
    </main>
  );
};

export default AboutUs;
