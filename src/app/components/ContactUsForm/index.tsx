"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import IllustrationContactUs from "@assets/icons/illustrationContactUs.svg";
import SectionTab from "../SectionTab";
import { homeContactUs } from "@/app/constants/titleSectionSettings";

export interface ISupportForm {
  name: string;
  email: string;
  message: string;
  contactReason: "say_hi" | "get_quote";
}

const ContactUsForm = () => {
  const defaultValues: ISupportForm = {
    name: "",
    email: "",
    message: "",
    contactReason: "say_hi",
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ISupportForm>({ defaultValues });

  const selectedReason = watch("contactReason");

  const onSubmit: SubmitHandler<ISupportForm> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <SectionTab
        title={homeContactUs.title}
        description={homeContactUs.description}
        wrapperClassName="mb-10 lg:mb-[85px]"
        descriptionClassName="lg:max-w-[323px]"
      />
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="flex gap-[50px] flex-col lg:flex-row lg:justify-between  bg-gray rounded-[45px] px-[30px] lg:px-[100px] lg:pt-[60px] lg:pb-20 py-[40px] lg:pr-0">
          <div className="flex grow flex-col gap-[36px] lg:gap-[40px]">
            <div className="flex gap-6 mr-auto ml-auto">
              <label className="flex items-center gap-[15px] cursor-pointer lg:text-[18px]">
                <input
                  type="radio"
                  value="say_hi"
                  {...register("contactReason")}
                  className="hidden"
                />
                <span className="w-5 h-5 border border-black rounded-full flex items-center justify-center">
                  {selectedReason === "say_hi" && (
                    <span className="w-3 h-3 bg-green rounded-full" />
                  )}
                </span>
                Say Hi
              </label>

              <label className="flex items-center gap-[15px] cursor-pointer lg:text-[18px]">
                <input
                  type="radio"
                  value="get_quote"
                  {...register("contactReason")}
                  className="hidden"
                />
                <span className="w-5 h-5 border border-black rounded-full flex items-center justify-center">
                  {selectedReason === "get_quote" && (
                    <span className="w-3 h-3 bg-green rounded-full" />
                  )}
                </span>
                Get a Quote
              </label>
            </div>

            <div className="flex flex-col gap-5 lg:gap-[25px]">
              <div className="flex flex-col gap-2.5 lg:gap-[5px]">
                <label htmlFor="name" className="text-sm lg:text-base">
                  Name
                </label>
                <input
                  id="name"
                  className="text-[#898989] placeholder-[#898989] lg:text-[18px] py-[18px] px-5 lg:px-[30px] border border-black rounded-[14px]"
                  {...register("name", {
                    required: "This field is required!",
                    minLength: {
                      value: 3,
                      message: "The name must be more than 3 symbols",
                    },
                  })}
                  placeholder="Name"
                />
                {errors.name && (
                  <span className="text-red-600 font-medium">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2.5 lg:gap-[5px]">
                <label htmlFor="email" className="text-sm lg:text-base">
                  Email*
                </label>
                <input
                  id="email"
                  className="text-[#898989] placeholder-[#898989] lg:text-[18px] py-[18px] px-5 lg:px-[30px] border border-black rounded-[14px]"
                  {...register("email", {
                    required: "Email is required!",
                    minLength: {
                      value: 10,
                      message: "The email must be more than 10 symbols",
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-red-600 font-medium">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2.5 lg:gap-[5px] col-span-2">
                <label htmlFor="message" className="text-sm lg:text-base">
                  Message*
                </label>
                <textarea
                  id="message"
                  className="text-[#898989] placeholder-[#898989] lg:text-[18px] py-[18px] px-5 lg:px-[30px] border border-black rounded-[14px] resize-none"
                  rows={5}
                  {...register("message", { required: "Message is required!" })}
                  placeholder="Message"
                />
                {errors.message && (
                  <span className="text-red-600 font-medium">
                    {errors.message.message}
                  </span>
                )}
              </div>
            </div>
            <button className="hidden lg:block bg-dark text-white text-xl rounded-[14px] cursor-pointer px-[35px] py-[20px] transition-all duration-300 hover:-translate-y-1 active:translate-y-1">
              Subscribe to news
            </button>
          </div>
          <IllustrationContactUs className="hidden lg:block" />
        </div>
        <div className="flex justify-center">
          <button className="mt-[30px] lg:hidden bg-dark text-white text-xl rounded-[14px] cursor-pointer px-[35px] py-[20px] transition-all duration-300 hover:-translate-y-1 active:translate-y-1">
            Subscribe to news
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
