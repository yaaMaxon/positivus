import Image from "next/image";
import Button from "../Button";
import HomeServicesList from "../HomeServicesList";
import freePropose from "@assets/img/freePropose.webp";

const HomeServices = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-[30px] lg:gap-10 mb-10 lg:mb-[85px]">
        <h2 className="text-[36px] lg:text-[40px] font-medium bg-green rounded-[7px] px-[7px]">
          Services
        </h2>
        <p className="lg:text-lg text-center lg:text-start lg:max-w-[580px]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <HomeServicesList />
      <div className="relative lg:flex justify-between bg-gray p-[50px] lg:px-[60px] rounded-[45px]">
        <div className="flex flex-col items-start gap-5 lg:gap-[26px] lg:max-w-[500px]">
          <span className="text-[26px] lg:text-[30px] font-medium">
            Let’s make things happen
          </span>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button className="bg-dark text-white">Get your proposal</Button>
        </div>
        <Image
          src={freePropose}
          alt="freePropose"
          className="absolute bottom-[-24px] right-0 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default HomeServices;
