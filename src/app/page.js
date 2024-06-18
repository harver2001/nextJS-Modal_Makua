import Image from "next/image";
import Sidebar from "./sidebar";
import RightBar from "./info"
import Post from "./post"
import ImageFeed from "./main";

export default function Home() {
  return (
    <div className="pd-4" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ flex: 1 }}>
        <Sidebar />
      </div>
      <div style={{ flex: 1 }}>
        <Post />
      </div>
      <div style={{ flex: 1 }}>
        {/* <ImageFeed /> */}
      </div>
      <div style={{ flex: 1 }}>
        <RightBar />
      </div>
    </div>
  );
}