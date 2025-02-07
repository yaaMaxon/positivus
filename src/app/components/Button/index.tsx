type Props = {
  children: string;
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, className, onClick }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-xl px-[35px] py-5 rounded-[14px] transition-all duration-300 hover:-translate-y-1 active:translate-y-1 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
