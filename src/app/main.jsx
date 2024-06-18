import Image from "next/image"
import image1 from "./images/image1.jpg"
import image2 from "./images/image2.jpg" 

const ImageFeed = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <div className="overflow-hidden rounded-lg">
        <Image src={image1} width={500} height={300} />
        <Image src={image2} width={500} height={300} /> 
      </div>
    </div>
  );
};

export default ImageFeed;