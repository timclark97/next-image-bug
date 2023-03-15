import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="photo.jpg" width={200} height={200} alt="Image" />
    </div>
  );
}
