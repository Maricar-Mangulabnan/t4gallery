"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>

      <div className="flex flex-row justify-between items-center gap-5">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton className="text-sm"
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh(); 
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
