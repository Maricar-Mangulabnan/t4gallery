import Image from "next/image";
import { getMyImages } from "~/server/db/queries";

export default async function Images() {

  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-5">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col ">
          <Image className="rounded-md shadow-md shadow-gray-700 transition-transform duration-300 ease-in-out hover:scale-105"
            src={image.url} objectFit="fill" alt={image.name} width={300} height={300} />
          <p className="text-center text-gray-400 capitalize">{image.name}</p>
        </div>
      ))}
    </div>
  )


}