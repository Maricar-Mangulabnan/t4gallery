import Link from "next/link";

const mockURLs = [
    "https://8uo8zvh03s.ufs.sh/f/mSYdP6AH4UtnFmUfrbJmh60doO7SAs13VkPBJwaticzXQGrn",
    "https://8uo8zvh03s.ufs.sh/f/mSYdP6AH4UtneofFPUUpBOi2SIawAjCxPdsEyUX65ZvntM1g",
    "https://8uo8zvh03s.ufs.sh/f/mSYdP6AH4UtncWe1KsMxXNqK3sjufP8bUZadMGOF1ErStwz0",

]
const mockIMAGES = mockURLs.map((url, index) => ({
  id : index + 1,
  url,

}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockIMAGES.map((image) => (
          <div key= {image.id} className="w-48">
            <img src={image.url}/>
              </div>
        ))}
      </div>
    </main>
  );
}
