import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container grid lg:grid-cols-6 gap-6 py-10  ">
      <div className=" col-span-3 space-y-4">
        <Link to={"/"}>
          <h1 className="font-bold capitalize">
            <span className="text-red-400">h</span>ome
          </h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorem
          vero fuga, animi possimus consectetur vitae commodi ipsam voluptate
          sequi dolorum quia laboriosam accusantium autem?
        </p>
        <div className="flex gap-6">
          <Link to={FaFacebook.com}>
            <FaFacebook />
          </Link>
          <Link>
            <FaSquareXTwitter />
          </Link>
          <Link>
            <FaGithub />
          </Link>
        </div>
      </div>
      <div className=" col-span-1 p-5">
        <h2 className="font-bold">about</h2>
        <ul>
          <li>company</li>
          <li>careers</li>
          <li>community</li>
          <li>ourWork</li>
        </ul>
      </div>
      <div className=" col-span-1 p-5">
        <h2 className="font-bold">blog</h2>
        <ul>
          <li>tech</li>
          <li>music</li>
          <li>videos</li>
          <li>adventure</li>
        </ul>
      </div>
      <div className=" col-span-1 pl-20">
        <h2 className="font-bold">products</h2>
        <ul>
          <li>women cloth</li>
          <li>man cloth</li>
          <li>devices</li>
          <li>electronics</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
