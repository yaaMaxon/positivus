import Button from "../Button";

type Props = {
  subTitle: string;
  description: string;
  textBtn: string;
  icon?: React.ReactNode;
  furtherIcon?: React.ReactNode;
  className?: string;
};

const BlurbBox = ({
  subTitle,
  description,
  furtherIcon,
  icon,
  textBtn,
  className,
}: Props) => {
  return (
    <div
      className={`lg:relative lg:flex justify-between bg-gray p-[50px] lg:px-[60px] rounded-[45px] 
      } ${className && className}`}
    >
      <div
        className={`flex flex-col items-start gap-5 lg:gap-[26px] lg:max-w-[500px]${
          furtherIcon && "gap-[25px]"
        }`}
      >
        <span className="text-[26px] lg:text-[30px] font-medium">
          {subTitle}
        </span>
        <p className={`lg:max-w-[500px] ${furtherIcon && "lg:max-w-[600px]"}`}>
          {description}
        </p>
        <Button className="bg-dark text-white">{textBtn}</Button>
      </div>
      {icon && (
        <div className="lg:absolute bottom-[-24px] right-0 hidden lg:block">
          {icon}
        </div>
      )}
      {furtherIcon && <div className="hidden lg:block">{furtherIcon}</div>}
    </div>
  );
};

export default BlurbBox;
