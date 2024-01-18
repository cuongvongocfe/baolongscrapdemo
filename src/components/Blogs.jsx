import React from "react";
import { BsArrowRight } from "react-icons/bs";
import BlogCards from "./BlogCards";

const Blogs = () => {
  return (
    <div className="text-white lg:px-24 px-4">
      {/* blog top */}
      <div>
        <h2 className="text-3xl font-bold text-center text-[orange] leading-snug lg:w-4/6 mx-auto pb-20">
        Quy trình Xử Lý Rác Thải Nguy Hại (Y-Tế và Công-Nghiệp) của Bảo Long được thực hiện một cách nghiêm ngặt và khép kín theo các hướng dẫn và quy định của Nhà Nước. Nó không đơn thuần là các thủ-tục-pháp-lý
         mà là giải pháp thực tế về các vấn đề môi trường và xã hội.
        </h2>

        {/* video player */}
        <a href="https://youtube.com" target="blank">
          <div className="bg-[url('/src/assets/video_bg.jpeg')] bg-cover bg-no-repeat cursor-pointer cs-video_block cs-style1 cs-video_open cs-bg">
            <span className="cs-player_btn cs-accent_color">
              <span></span>
            </span>
          </div>
        </a>
      </div>

      <div className="h-28"></div>
      {/* main blog */}
      <div className="relative" id="blogs">
        <div
          className="flex flex-col lg:flex-row justify-between lg:items-center gap-12"
          id="services"
        >
          {/* contents */}
          <div className="lg:w-1/3 space-y-5 z-30">
            <h4 className="text-gray-200 font-semibold text-2xl">Hạng Mục</h4>
            <h2 className="text-5xl font-bold mb-5 leading-snug">
            Khám phá ấn phẩm gần đây
            </h2>
            {/* <a
              className="inline-flex items-center gap-2 font-semibold mt-5 hover:underline underline-offset-4 hover:text-orange transition-all ease-in duration-300"
              href="/"
            >
              <span>Xem Thêm</span>
              <BsArrowRight />
            </a> */}
          </div>

          {/* cards */}
          <div className="lg:w-2/3 my-8">
            <div className="flex mb-10">
              <div className="h-8 w-1/3 rounded-s-2xl  bg-white"></div>
              <div className="h-8 w-1/2  bg-red-700"></div>
              <div className="h-8 w-1/3  bg-blue-700"></div>
              <div className="h-8 w-1/2 rounded-e-2xl bg-orange"></div>
            </div>

            {/* blog cards */}
            <BlogCards />

            <div className="w-full mx-auto relative ">
              <button className="lg:absolute right-0 mt-8 px-6 py-2 bg-white text-black rounded hover:bg-orange hover:text-white transition-all duration-300 hover:-translate-y-3">
              Đọc thêm
              </button>
            </div>
          </div>
        </div>

        {/* shapes */}
        <div className="hidden lg:block">
          <div className="cs-shape_4"></div>
          <div className="cs-shape_4"></div>
          <div className="cs-shape_4"></div>
        </div>
        <div className="lg:h-60 h-8"></div>
      </div>
    </div>
  );
};

export default Blogs;
