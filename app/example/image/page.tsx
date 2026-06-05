import Image from "next/image";
// assets must be imported
import img1 from "@/app/assets/ss.png";
import img2 from "@/app/assets/ss2.png";
export default function ImagePage() {
    return (
        <div>
            My Image Page 
            <img src="/image.jpg" alt="image load error" />

            <Image
                src="/image.jpg"
                alt="Image"
                height={ 1000}
                width={ 1000}
            />
            <Image
                src={img1}
                alt="Image"
                height={ 1000}
                width={ 1000}
            />
            <Image
                src={img2}
                alt="Image"
                height={ 1000}
                width={ 1000}
            />

        </div>
    );
}