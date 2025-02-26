import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import { db } from "~/server/db";
import { getMyImages } from "~/server/db/queries";

export default async function Images (){
    
  const images = await getMyImages();
  
    return(
        <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key= {image.id} className="w-48">
            <img src={image.url}/>
            <p className="text-center">{image.name}</p>
              </div>
        ))}
      </div>
    )
}