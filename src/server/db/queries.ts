import "server-only";
import { auth } from "@clerk/nextjs/server";
import { db } from "./index";
import { eq } from "drizzle-orm";

export async function getMyImages() {
  const user = await auth();
  if (!user.userId) throw new Error("Unauthorized");
  const images = await db.query.images.findMany({
    where: (model) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
}
