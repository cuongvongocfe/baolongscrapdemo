import React from "react";
import PortfolioSlider from "./PortfolioSlider";
import CenterMode from "./PortfolioSlider";

const Portfolio = () => {
  return (
    <div>
      <div className="text-center pb-14 lg:px-24 px-4" id="portfolio">
        <h4 className="text-gray-200 font-semibold text-2xl">
        Dự Án Mới Nhất
        </h4>
        <h2 className="text-5xl font-bold leading-snug text-white">
        Danh Mục Đầu Tư
        </h2>
      </div>

      {/* carousel card */}
      <div className="lg:px-24 px-4 overflow-hidden">
        <CenterMode />
      </div>

      <div className="md:h-24"></div>
    </div>
  );
};

export default Portfolio;
