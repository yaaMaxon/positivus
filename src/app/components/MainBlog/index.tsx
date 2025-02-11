import Letters from "@assets/icons/letters.svg";
import BlogContent from "@components/BlogContent";
import Image from "next/image";
import starFrame from "@assets/img/starFrame.webp";

const MainBlog = () => {
  return (
    <div>
      <div className="flex items-center justify-between pb-[26px] border-b border-b-black mb-[50px] lg:mb-[70px]">
        <div className="flex gap-2 items-center">
          <Image src={starFrame} alt="Sarah Kim" />
          <div>
            <span className="flex flex-col text-lg lg:text-xl font-medium">
              Sarah Kim
            </span>
            <span className="text-lg">Content Creator</span>
          </div>
        </div>
        <Letters />
      </div>
      <BlogContent />
    </div>
  );
};

export default MainBlog;
