"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Button from "../Button";
import contactUsImg from "@assets/img/contactUsImg.webp";

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
    contactReason: "say_hi", // За замовчуванням "Say Hi"
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
      <div className="flex flex-col lg:flex-row items-center gap-[30px] lg:gap-10 mb-10 lg:mb-[85px]">
        <h2 className="text-[36px] lg:text-[40px] font-medium bg-green rounded-[7px] px-[7px]">
          Contact Us
        </h2>
        <p className="lg:text-lg text-center lg:text-start lg:max-w-[323px]">
          Connect with Us: Let`s Discuss Your Digital Marketing Needs
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="flex flex-col lg:flex-row lg:relative bg-gray rounded-[45px] px-[30px] lg:px-[100px] lg:pt-[60px] lg:pb-20 py-[40px]">
          <div className="flex flex-col gap-[36px] lg:gap-[40px]">
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
                  {...register("email", { required: "Email is required!" })}
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
            <div className="hidden lg:block">
              <Button className="bg-dark w-full text-white">
                Send Message
              </Button>
            </div>
          </div>

          <Image
            src={contactUsImg}
            alt="contact-us"
            className="absolute left-[620px] hidden lg:block"
          />
        </div>

        <div className="mt-[30px] flex justify-center lg:hidden">
          <Button className="bg-dark text-white">Send Message</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
