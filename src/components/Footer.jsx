import React from "react";
import { FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";

const Footer = () => {
  return (
    <div className="lg:px-24 px-4 text-white">
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-12">
        <div className="space-y-4 lg:w-1/3">
          <a href="" className="text-3xl font-bold text-white">
            <span className="text-yellow-400">Bảo Long Scrap</span>
          </a>
          <p className=" text-gray-300">
            Welcome to baolongscrap sed ut perspiciae omunde omnis iste natus
            error sitort voluptatem accusantium.
          </p>
          <div className="flex gap-5 text-white">
            <a
              href="/"
              className=" block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <SiZalo className="w-5 h-5" />
            </a>
            <a
              href="https://fb.com/baolongscrap"
              target="blank"
              className=" block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="/"
              className=" block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaTiktok className="w-5 h-5" />
            </a>
            <a
              href="/"
              className=" block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Dịch vụ</h3>
          <div className="space-y-3 text-gray-300">
            <a href="/xulychatthai" className="block hover:text-orange">
              XỬ LÝ CHẤT THẢI NGUY HẠI
            </a>
            <a href="/tieuhuyhoso" className="block hover:text-orange">
              TIÊU HUỶ GIẤY HỒ SƠ – TÀI LIỆU MẬT
            </a>
            <a href="/phado" className="block hover:text-orange">
              PHÁ DỞ CÔNG TRÌNH XÂY DỰNG
            </a>
            <a href="/xulychatthaithuytinh" className="block hover:text-orange">
              XỬ LÝ CHẤT THẢI THUỶ TINH THÔNG THƯỜNG
            </a>
            <a href="/thumua" className="block hover:text-orange">
              THU MUA TÀI SẢN THANH LÝ
            </a>
          </div>
        </div>

        {/* contact */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Liên Hệ</h3>
          <div className="space-y-3 text-gray-300 ">
            <a href="/" className="block">
              (+84) 87.6789.252
            </a>
            <a href="/" className="block">
              baolongscrap@gmail.com
            </a>
            <a href="/" className="block">
              Mã Số Thuế : 1702260628
            </a>
            <a
              href="https://www.google.com/maps/place/C%C3%B4ng+Ty+TNHH+B%E1%BA%A3o+Long+Scrap+-+Ph%E1%BA%BF+Li%E1%BB%87u+-Tv+X%E1%BB%AD+l%C3%BD+r%C3%A1c+th%E1%BA%A3i+y+t%E1%BA%BF+-+Nguy+h%E1%BA%A1i+-+C%C3%B4ng+nghi%E1%BB%87p/@9.9786998,105.1006974,17z/data=!3m1!4b1!4m6!3m5!1s0x31a0b554b75f0c41:0xbd4d768eeec11fb3!8m2!3d9.9786998!4d105.1032723!16s%2Fg%2F11tf0tm57y?hl=vi-VN&entry=ttu"
              target="blank"
              className="block hover:text-orange"
            >
              A17-36A Đường Số 02, <br /> Khu Nam An Hòa, Phường An Hòa, Thành
              Phố Rạch Giá, Tỉnh Kiên Giang,
            </a>
            <a className="block text-orange">ISO 13485:2016</a>
          </div>
        </div>

        {/* newsletter */}
        <div className="space-y-4 lg:w-96">
          {/* <h3 className="text-2xl font-semibold">Đăng ký nhận tin</h3>
          <div className="space-y-3 text-gray-300">
            <div className="relative w-full">
              <input
                className="newsletter_input"
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
              />
              <button className="newsletter_btn">
                <span>Send</span>
              </button>
            </div>
            <p>
              At vero eos et accusamus et iusto odio as part dignissimos ducimus
              qui blandit.
            </p>
          </div> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.4613071286003!2d105.10069737497076!3d9.978699790125619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0b554b75f0c41%3A0xbd4d768eeec11fb3!2zQ8O0bmcgVHkgVE5ISCBC4bqjbyBMb25nIFNjcmFwIC0gUGjhur8gTGnhu4d1IC1UdiBY4butIGzDvSByw6FjIHRo4bqjaSB5IHThur8gLSBOZ3V5IGjhuqFpIC0gQ8O0bmcgbmdoaeG7h3A!5e0!3m2!1svi!2s!4v1702367741863!5m2!1svi!2s"
            width="350"
            height="300"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="h-12"></div>
      <hr className="border-gray-300" />
      <div className="h-8"></div>

      {/* copyright text */}
      <div className="flex flex-col sm:flex-row justify-between pb-7">
        
        <p>Copyright © 2023 Bảo Long Scrap.</p>
      </div>
    </div>
  );
};

export default Footer;
