/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import Header from "../utility/Header";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCall, MdOutlineMail } from "react-icons/md";
import emailjs from "@emailjs/browser";
// aso animation
import Aos from "aos";
import "aos/dist/aos.css";
import { toast } from "react-hot-toast";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const onSubmit = () => {
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message Send Successfully!");
          reset();
        },
        (error) => {
          toast.error(error.message);
        }
      );
  };

  return (
    <div id="contact" className="bg-[#190128] pt-10 pb-10 ">
      <Header header={"Contact"} />
      <div className="max-w-7xl px-5 mx-auto bg-[#190128] ">
        <div className="grid md:grid-cols-2 items-center">
          <div className="pb-10">
            <div data-aos="fade-up" className="flex gap-5 text-2xl">
              <div className="">
                <FaMapMarkerAlt className="bg-white text-black text-3xl rounded-full h-16 w-16 p-5 hover:bg-[#0788FF] hover:text-white" />
              </div>
              <div className="">
                <h1 className="text-[#0788FF] font-bold">Address</h1>
                <p className="text-xl text-white">Dhaka, Bangladesh</p>
              </div>
            </div>
            <div data-aos="fade-up" className="flex gap-5 text-2xl mt-10">
              <div className="">
                <MdCall className="bg-white text-black text-3xl rounded-full h-16 w-16 p-5 hover:bg-[#0788FF] hover:text-white" />
              </div>
              <div className="">
                <h1 className="text-[#0788FF] font-bold">Phone</h1>
                <p className="text-xl text-white">+8801799846537</p>
              </div>
            </div>
            <div data-aos="fade-up" className="flex gap-5 text-2xl mt-10">
              <div className="">
                <MdOutlineMail className="bg-white text-black text-3xl rounded-full h-16 w-16 p-5 hover:bg-[#0788FF] hover:text-white" />
              </div>
              <div className="">
                <h1 className="text-[#0788FF] font-bold">Email</h1>
                <p className="text-xl text-white">munimul.info@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="">
            <form
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              className="card-body"
            >
              <div className="grid lg:grid-cols-2 gap-10">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Name</span>
                  </label>

                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                  />
                  {errors.name && (
                    <span className="text-red-800">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Phone</span>
                  </label>

                  <input
                    type="number"
                    {...register("phone", { required: true })}
                    placeholder="Your Phone Number"
                    className="input input-bordered w-full"
                  />
                  {errors.phone && (
                    <span className="text-red-800">phone is required</span>
                  )}
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>

                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered w-full"
                />
                {errors.email && (
                  <span className="text-red-800">Email is required</span>
                )}
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text text-white">Message</span>
                </label>
                <textarea
                  {...register("message", { required: true })}
                  rows="3"
                  placeholder="Message"
                  className="rounded-md px-3 w-full"
                ></textarea>
                {errors.message && (
                  <span className="text-red-800">Message is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
        <hr className="mt-10" />
      </div>
    </div>
  );
};

export default Contact;
