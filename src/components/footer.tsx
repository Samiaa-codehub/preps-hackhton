import Image from "next/image";
import React from "react";
import Qcode from "../../public/Qcode.png";
import { AiOutlineSend } from "react-icons/ai";
 import app from "./../../public/app.png";
 import logo from "./../../public/logo.png";
const Footer = () => {
  return (
    <footer className="w-fixed-[1440px] h-[440px] bg-[#000000] mt-[10%]">
      <div className="w-[1170px] h-[236px] py-[66px]  flex justify-between mx-auto">
        <div className="w-Hug-[217px] h-[188px]">
          <div className="w-Hug-[206px] h-[124px] flex flex-col gap-5">
            <h5 className="text-[white] font-bold text-[24px]">Exclusive</h5>
            <h5 className="text-[#FAFAFA] font-medium text-[20px]">
              Subscribe
            </h5>
            <p className="text-[#FAFAFA] font-semimedium text-[16px]">
              Get 10% off your first order
            </p>
          </div>
          <div className="py-4">
            <input
              placeholder="Enter your email"
              className="bg-[black] text-[#FAFAFA] text-[16px] font-medium py-2 items-center px-2 border border-2 rounded-[5px]"
            ></input>
            <AiOutlineSend />

          </div>
        </div>
        <div className="w-Hug-[175px] h-[180px]">
            <h5 className="text-[#FAFAFA] font-medium text-[20px]">Support</h5>
            <div className="w-Hug-[175px] h-Hug-[128px] flex flex-col  gap-5  py-4 text-[#FAFAFA]">
                <p >111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
        </div>
        <div className="w-Hug-[123px] h-[236px] text-[#FAFAFA]">
            <h5 className="font-medium text-[20px] ">Account</h5>
            <div className="w-Hug-[123px] h-Hug-[184px] text-[#FAFAFA] flex flex-col gap-2 py-4">
                <p className="font-semimedium text-[16px]">My Account</p>
                <p className="font-semimedium text-[16px]">Login / Register</p>
                <p className="font-semimedium text-[16px]">Cart</p>
                <p className="font-semimedium text-[16px]">Wishlist</p>
                <p className="font-semimedium text-[16px]">Shop</p>
            </div>

        </div>
        <div className="w-Hug-[109px] h-Hug-[196px] text-[#FAFAFA]">
            <h5 className="font-medium text-[20px]">Quick Link</h5>
            <div className="w-Hug-[104px] h-hug-[144px] flex flex-col gap-2 py-4">
                <p className=" font-semibold text-[16px]">Privacy Policy</p>
                <p className="font-semibold text-[16px]">Terms Of Use</p>
                <p className="font-semibold text-[16px]">FAQ</p>
                <p className="font-semibold text-[16px]">Contact</p>
            </div>
        </div>
        <div className="w-Hug-[198px] h-[162px] text-[#FAFAFA]">
            <h5 className="font-medium text-[20px]">Download App</h5>
            <div className="w-Hug-[198px] h-Hug-[110px] flex flex-col gap-">
                <p className="font-medium text-[12px] text-[#FAFAFA] opacity-[70%]">Save $3 with App New User Only</p>
                <div className=" flex gap-3">
                    <Image
                    src={Qcode}
                    alt="Qcode"
                    width={76}
                    height={76}
                    className="border border-2  border-[white]"
                    />
                    <div className="">
                   <Image
                   src={logo}
                   alt="logo app"
                   width={100}
                   height={100}
                   className=" w-[104px] h-[34px] rounded-[4px]"
                   />
                   <Image
                   src={app}
                   alt="app-logo"
                   width={100}
                   height={100}
                   className="w-[110px] h-[34px] rounded-[4px]"
                   />
                    </div>
                </div>
                
            </div>
        </div>
      </div>
      <div className="w-Hug-[1440px] h-Hug-[40px] opacity-[40%] py-[66px]">
        <p className="font-semibold text-[16px] text-[#FFFFFF] text-center py-8">&copy;Copyright Rimel 2022. All right reserved</p>

      </div>
    </footer>
  );
};

export default Footer;
