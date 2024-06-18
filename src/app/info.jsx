import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBell, faCog } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image"
import logo from "./logo.png"
import DownloadButton from './DownloadButton';
import profile from "./profile.png"

const Sidebar = () => {
  return (
    <div className="h-[70%] w-64 bg-[#d4d4d5] text-black fixed m-5 rounded-xl mx-[100px] flex justify-center items-center">
      <div className="p-6 ">
        <ul className="mt-6">
          <li className="flex justify-center">
            <Image src={profile} height={100} width={100} className="border-red-500 border-4 rounded-full" />
          </li>
          <h1 className="font-bold text-center">Forrest Skerman-Stevenson</h1>
          <br />
          <li className="my-2">
            <p className="text-sm text-justify">Driven by compassion and a sense of justice, humanitarians engage in a variety of activities, such as disaster relief, often collaborating with non-governmental organizations and international bodies.</p>
            <br />
            <h1 className=" text-center">Los Angeles, CA</h1>
          </li>
          <br />
          
          <DownloadButton content = "Edit Profile"/>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;