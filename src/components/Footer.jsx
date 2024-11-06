import React from "react";
import Haeding from "./Haeding";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-base-200 p-10">
      <div className="flex flex-col text-center">
        <Haeding title={'Gadget Heaven'} subtitle={'Leading the way in cutting-edge technology and innovation.'}/>
        {/* <h1 className="text-3xl font-bold text-center">  </h1>
        <p className=""> Leading the way in cutting-edge technology and innovation. </p> */}
      </div>
      <div className="divider"></div>
      <div className="flex justify-between w-3/5 m-auto">
        <nav className="flex flex-col">
          <h6 className="text-black font-bold">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="text-black font-bold">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="text-black font-bold">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
