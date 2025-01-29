import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
    "https://8uo8zvh03s.ufs.sh/f/mSYdP6AH4UtnFmUfrbJmh60doO7SAs13VkPBJwaticzXQGrn",
    "https://8uo8zvh03s.ufs.sh/f/mSYdP6AH4UtneofFPUUpBOi2SIawAjCxPdsEyUX65ZvntM1g",
    "https://8uo8zvh03s.ufs.sh/f/mSYdP6AH4UtncWe1KsMxXNqK3sjufP8bUZadMGOF1ErStwz0",

]
const mockIMAGES = mockUrls.map((url, index) => ({
  id : index + 1,
  url,

}));

export default async function HomePage() {

    const posts = await db.query.posts.findMany()

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key= {post.id}>{post.name}</div>
  ))}
        {mockIMAGES.map((image) => (
          <div key= {image.id} className="w-48">
            <img src={image.url}/>
              </div>
        ))}
      </div>
    </main>
  );
}
