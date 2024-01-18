import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className=" text-white relative md:-mt-[100px] -mt-10 bg-gradient-to-tr from-[#161616] to-[#080808] lg:mx-24 mx-4 md:py-20 py-12 md:px-16 px-6 rounded-xl z-50 flex flex-col md:flex-row justify-between md:items-center gap-12"
    >
      <div className="bg-[url(/src/assets/funfact_bg.svg)] bg-no-repeat bg-center h-full w-full absolute left-0 top-0 opacity-75"></div>

      {/* left side text */}
      <div className=" md:w-2/5">
        <h2 className="text-5xl font-bold mb-5">Về chúng tôi</h2>
        <p className="text-gray-300">
        Bảo Long Scrap là đại diện độc quyền của Công Ty Cổ Phần Công Nghệ An Huy tại Kiên Giang - Đơn vị thứ 02 trong danh sách 23 đơn vị xử lý chất thải nguy hại Y Tế - Công Nghiệp được Sở Tài Nguyên và Môi Trường đề xuất theo Công Văn số 220/STNMT-BVMT ngày 16/02/2022.
Bảo Long Scrap cam kết cung cấp cho quý khách hàng dịch vụ xử lý chất thải nguy hại hiện đại và tiên tiến với mức chi phí thấp nhất.
        </p>
      </div>

      {/* right side text */}
      <div className="md:w-3/5">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">20+</h4>
            <div className="">
              <span className="text-orange font-bold text-lg">+</span>
              <p className="mb-2 text-sm leading-tight text-gray-300">
                Contract
              </p>
            </div>
          </div>
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">20+</h4>
            <div>
              <span className="text-orange font-bold text-lg">+</span>
              <p className="mb-2 text-sm leading-tight text-gray-300">
                Project Completed
              </p>
            </div>
          </div>
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">28+</h4>
            <div className="">
              <span className="text-orange font-bold text-lg">+</span>
              <p className="mb-2 text-sm leading-tight text-gray-300">
                Team Members
              </p>
            </div>
          </div>
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">550</h4>
            <div className="">
              <span className="text-orange font-bold text-lg">+</span>
              <p className="mb-2 text-sm leading-tighttext-gray-300">
                Digital products
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
