// import Image from "next/image";
import Letters from "@assets/icons/letters.svg";
import StarFrame from "@assets/icons/star.svg";
// import blogSarahKim from "@assets/img/blogSarahKim.webp";
import BlogContent from "@components/BlogContent";

const MainBlog = () => {
  return (
    <div>
      <div className="flex items-center justify-between pb-[26px] border-b border-b-black mb-[50px] lg:mb-[70px]">
        <div className="flex gap-2 items-center">
          {/* <Image src={blogSarahKim} alt="Sarah Kim" /> */}
          <StarFrame className="fill-dark w-[56px] h-[59px]" />
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
