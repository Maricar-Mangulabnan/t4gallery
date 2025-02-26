
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Images from "~/app/_components/images";
import { getMyImages } from "~/server/db/queries";


export const dynamic = "force-dynamic";


export default async function HomePage() {

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please Sign In Above  </div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
