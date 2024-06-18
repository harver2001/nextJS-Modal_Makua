import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faBell } from '@fortawesome/free-regular-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image"
import logo from "./logo.png"
import DownloadButton from './DownloadButton';
import image1 from "./images/image1.png"
import image2 from "./images/image1.png"

const Sidebar = () => {
  return (
    <div className="h-[90%] w-64 bg-[#d4d4d5] text-black fixed m-5 rounded-xl mx-8">
      <div className="p-6">
        <ul className="mt-6">
          <li>
            <Image src={logo} height={100} width={500} />
          </li>
          <br />
          <li className="my-2">
            <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faUserCircle} height={20} width={20} />
              <span style={{ marginLeft: '10px' }}>Profile</span>
            </div>
          </li>
          <br />
          <li className="my-2">
            <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faBell} height={20} width={20} />
              <span style={{ marginLeft: '10px' }}>Notifications</span>
            </div>
          </li>
          <br />
          <li className="my-2">
            <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faCog} height={20} width={20} />
              <span style={{ marginLeft: '10px' }}>Settings</span>
            </div>
          </li>
          <br />
          <li className="my-2">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginLeft: '10px', fontWeight: '70px' }}>COMMUNITIES</span>
            </div>
          </li>
          <br />
          <li className="my-2 mb-2">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src={image1} height={20} width={20} />
              <span style={{ marginLeft: '20px' }}>MeraZonia</span>
            </div>
          </li>
          <br />
          <li className="my-2">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src={image2} height={20} width={20} />
              <span style={{ marginLeft: '20px' }}>GiveInternet</span>
            </div>
          </li>
          <br />
          <br />
          <DownloadButton content="Download the app" />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;